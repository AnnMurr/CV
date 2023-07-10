enum CookieLinks {
    Link1 = 'https://drive.google.com/uc?id=1uPrrn6LJcGnO7_KhDnucfHtMmQLB7FLt',
    Link2 = 'https://drive.google.com/uc?id=1uqr-UJ88zvssVbmiLxmhxUKMyVUVns6f',
    Link3 = 'https://drive.google.com/uc?export=download&id=12MIYZ5msMjz_hXfJzQb7QbDiahFqZ9Vf'
}

for (const link of Object.values(CookieLinks)) {
    document.cookie = "photo=" + encodeURIComponent(link);
}