export const toCamelCase = (category: string) => {
    return category.replace(category[0], category[0].toLocaleUpperCase());
}