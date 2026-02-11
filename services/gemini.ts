import { GoogleGenAI } from "@google/genai";

export const analyzeProcurementNeeds = async (
  industry: string,
  companySize: string,
  challenges: string
): Promise<string> => {
  try {
    // Initialize the client here to prevent app-level crashes if API Key is missing on load
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

    const prompt = `
      Ti si stručni konsultant za nabavku u kompaniji ruix.agency koja posluje u Srbiji.
      Korisnik je uneo sledeće podatke o svojoj kompaniji:
      - Industrija: ${industry}
      - Veličina kompanije: ${companySize}
      - Glavni izazovi: ${challenges}

      Molim te, napiši kratak, profesionalan odgovor na srpskom jeziku (do 100 reči).
      Predloži kako automatizacija nabavke može rešiti njihove specifične izazove.
      Budi direktan i ubedljiv.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });

    return response.text || "Došlo je do greške prilikom generisanja odgovora.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Trenutno nismo u mogućnosti da obradimo vaš zahtev. Molimo pokušajte kasnije.";
  }
};