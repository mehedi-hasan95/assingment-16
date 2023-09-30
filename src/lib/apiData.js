export async function getHeroData() {
    const res = await fetch(process.env.BASE_URL + "HeroList");

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    return res.json();
}
