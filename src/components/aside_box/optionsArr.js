export const Options = [
    [
        "Pride Month",
        "Best Book Ever",
        "Best Cookbooks Ever",
        "Best Crimes & Thriller Books",
        "Best Romance Books"
    ],
    [
        "Ask the Author",
        "Star Wars",
        "Literazy Price",
        "New Release",
        "Books by Languaje"
    ],
    [
        "Books in Spanish",
        "Books in German",
        "Books in French",
        "Books in Polish"
    ],
    [
        "Material and Coursework",
        "Background and Reference",
        "English for Business",
        "Spanish-English Dictionaries"
    ]
]

const addShow = (options) => {
    return options.map(el => el.push("Show more"))
}
export const newArr = addShow(Options)