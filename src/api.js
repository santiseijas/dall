
export async function generateImage (query) {

  try {
    const images = await fetch("https://api.openai.com/v1/images/generations", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer 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`,
      },
      body: JSON.stringify({
        prompt: query,
        n: 2,
        size: "512x512",
      }),
    });
    const content = await images.json();
    return content.data;
  } catch (error) {
    console.error(error);
  }
};
