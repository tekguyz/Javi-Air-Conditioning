import { GoogleGenAI, Type } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { issue, context = {} } = await req.json();

    if (!issue || typeof issue !== "string") {
      return NextResponse.json(
        { error: "Issue query is required." },
        { status: 400 }
      );
    }

    const apiKey = process.env.GEMINI_API_KEY;

    // Graceful fallback for local/sandbox modes block if Gemini key is placeholder or empty
    if (!apiKey || apiKey === "MY_GEMINI_API_KEY") {
      // Simulate highly specialized local diagnostics as an elite fallback
      const simulatedDiagnostic = getSimulatedDiagnostic(issue);
      return NextResponse.json({
        ...simulatedDiagnostic,
        isSimulated: true,
      });
    }

    // Lazy initialization of the SDK
    const ai = new GoogleGenAI({
      apiKey: apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });

    const prompt = `Assess this air conditioning or indoor air quality issue described by the homeowner: "${issue}". 
Additional context: thermostat is set to ${context.temp || "unspecified"}°F, air flow: ${context.airflow || "unspecified"}.`;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
      config: {
        systemInstruction: `You are JaviBot, the highly intelligent clinical diagnostic engine of Javi Air Conditioning. Your principal is Javier Lima, FL Certified Contractor License #CAC1821100.
Your dual mission is absolute technical honesty and protecting homeowners from standard HVAC contractor sales tricks (like immediately declaring a unit 'condemned' to upsell a complete unit, overcharging for freon, or exaggerating duct mold risks).

Analyze the user's AC issue in a clinical, helpful manner and output a JSON response containing:
- likelyCause: A detailed explanation of the clinical suspect.
- diySteps: An array of 2-3 safe, simple actions the homeowner can perform themselves safely (e.g., check drain line shut-off floating switch, inspect outdoor disconnect box, replace dirty filter, wash condenser coils).
- honestWarning: A raw, transparent warning exposing what untrustworthy techs might claim vs. the physical truth. Call out excessive line items.
- recoAction: Direct expert guidance on whether this is a quick fix, an emergency shutdown, or a standard maintenance visit.

Maintain a professional, premium, reassuring, yet direct tone representing Javier Lima's no-sales-pitches honesty. Do not output anything except the JSON structure.`,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            likelyCause: { 
              type: Type.STRING,
              description: "The primary clinical suspect explaining these physical symptoms."
            },
            diySteps: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "1 to 3 absolutely safe, actionable homeowner checks."
            },
            honestWarning: {
              type: Type.STRING,
              description: "Exposing typical high-sales tricks/scams for this scenario vs reality."
            },
            recoAction: {
              type: Type.STRING,
              description: "Final clear recommendation regarding service urgencies."
            }
          },
          required: ["likelyCause", "diySteps", "honestWarning", "recoAction"]
        }
      }
    });

    const rawText = response.text;
    if (!rawText) {
      throw new Error("Empty response from AI engine.");
    }

    const jsonResponse = JSON.parse(rawText.trim());
    return NextResponse.json({ ...jsonResponse, isSimulated: false });

  } catch (error: any) {
    console.error("Diagnostic engine error:", error);
    return NextResponse.json(
      {
        error: "Diagnostic process stalled",
        details: error?.message || "Unknown error",
        ...(getSimulatedDiagnostic(error?.message || "standard error")),
        isSimulated: true,
      },
      { status: 200 } // Status 200 to allow smooth UI state recovery with fallback data
    );
  }
}

// Fallback algorithm providing high-fidelity, helpful diagnostics for testing/local
function getSimulatedDiagnostic(issue: string): {
  likelyCause: string;
  diySteps: string[];
  honestWarning: string;
  recoAction: string;
} {
  const norm = issue.toLowerCase();

  if (norm.includes("warm") || norm.includes("hot") || norm.includes("cool")) {
    return {
      likelyCause: "Potential air restriction at the indoor filter, a tripped high-pressure switch, or a failed condenser fan capacitor.",
      diySteps: [
        "Inspect your indoor air filter. A clogged filter chokes airflow, freezing the evaporator coil and causing lukewarm air.",
        "Check your outdoor condenser fan. If the compressor hums but the fan doesn't spin, the run capacitor has likely failed.",
        "Ensure the outdoor breaker switch hasn't accidentally tripped."
      ],
      honestWarning: "Dishonest HVAC technicians often claim a bad capacitor or restricted airflow requires a brand new $8,000 outdoor system. A standard capacitor swap takes 15 minutes and carries zero high-pressure complexity.",
      recoAction: "Turn off the system at the thermostat immediately to prevent compressor overheat. Schedule Javi Air's Rapid Diagnostic for a calibrated pressure read."
    };
  }

  if (norm.includes("noise") || norm.includes("sound") || norm.includes("click") || norm.includes("loud")) {
    return {
      likelyCause: "Electrical relay chatter inside the contactor or build-up of particulate debris on the condenser blades.",
      diySteps: [
        "Shut off the cooling and check if the sound persists. If clicking is outdoors, it's typically the low-voltage contactor failing to pull in.",
        "Look for loose housing panels or leaves resting inside the fan outlet shroud."
      ],
      honestWarning: "Many contractors will tell you a clicking sound means the compressor itself has locked up ('dead motor') when it is actually a $50 contactor switch worn from normal cycling.",
      recoAction: "Safe to run in the short-term, but a loose or sputtering contactor should be professionally cleared before it damages other electrical nodes."
    };
  }

  if (norm.includes("smell") || norm.includes("odor") || norm.includes("stink") || norm.includes("musty")) {
    return {
      likelyCause: "Clogged auxiliary drain lines trapping static condensation, inducing localized humidity bio-build-up.",
      diySteps: [
        "Examine the primary drain line PVC outlet outside your home. Ensure it is actively dripping and not backed up.",
        "Locate the overflow safety float switch near the air handler. If the cup is full of water, the switch stops the system."
      ],
      honestWarning: "Companies often invent full-duct ductwork replacement sales scams of $4,000 by magnifying slight moisture dust. Standard drainage sanitization and a high-efficiency UV line usually eliminate 99% of symptoms.",
      recoAction: "Check the safety float switch. Pouring half a cup of vinegar down the condensate line cleans light build-up. Book an Air Quality specialist if sneeze symptoms persist."
    };
  }

  // Generic robust diagnostic
  return {
    likelyCause: "Localized airflow resistance, minor voltage deviation, or system locking initiated by an active safety switch.",
    diySteps: [
      "Check your thermostat's batteries. Weak cells cause signal dropouts, shutting systems off without diagnostic alarms.",
      "Check if any supply air vents are entirely blocked or covered, causing pressure imbalances."
    ],
    honestWarning: "Technical transparency is rare. Avoid signing service contracts that require you to commit to unitemized system replacements on the spot. Always insist on written pressure and amp draws.",
    recoAction: "Gather system age and operational symptoms, then initiate a direct live chat or Rapid Diagnostic visit with Javier Lima's licensed crew."
  };
}
