import instance from "./config";

export const getAll = () => {
    const url = "/category";
    return instance.get(url);
};
export const get = (id) => {
    const url = `/category/${id}`;
    return instance.get(url);
};
export const remove = (id) => {
    const url = `/category/${id}`;
    return instance.detele(url);
};
export const add = (product) => {
    const url = `/category`;
    return instance.post(url, product);
};
export const edit = (post) => {
    const url = `/category/${post.id}`;
    return instance.put(url, post);
};