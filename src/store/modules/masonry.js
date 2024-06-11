import masonry from "../../data/masonry.json"

const state = {
    imgs : masonry.imgs,
    imagearray:masonry.imagearray,
    images: masonry.images,
    imags: masonry.imags,
    photo: masonry.photo,
    search: masonry.search
};

export default {
    namespaced: true,
    state,
}