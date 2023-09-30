export async function getHeroData() {
    const res = await fetch(process.env.BASE_URL + "HeroList");

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    return res.json();
}

export async function getBrandList() {
    const res = await fetch(process.env.BASE_URL + "BrandList");

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    return res.json();
}

export async function getWorkList() {
    const res = await fetch(process.env.BASE_URL + "WorkList");

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    return res.json();
}

export async function getStatList() {
    const res = await fetch(process.env.BASE_URL + "StatList");

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    return res.json();
}

export async function getFeaturedProject() {
    const res = await fetch(process.env.BASE_URL + "FeaturedProject");

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    return res.json();
}
