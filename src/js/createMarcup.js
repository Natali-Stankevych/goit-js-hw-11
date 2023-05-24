export function createMarcup(marcup) {
    return marcup
        .map(
            ({
                webformatURL,
                largeImageURL,
                tags,
                likes,
                views,
                comments,
                downloads,
            }) => {
                return `<div class="photo-card">
    <a class="photo-link" href="${largeImageURL} >
        <img class="photo" src="${webformatURL}" alt="${tags}" loading="lazy"">
    </a>
    <ul class="info">
        <li class="info-item"><b>likes</b>${likes}</li>
        <li class="info-item"><b>views</b>${views}</li>
        <li class="info-item"><b>comments</b>${comments}</li>
        <li class="info-item"><b>downloads</b>${downloads}</li>
    </ul>
</div>`
            }
        ).join('');
}