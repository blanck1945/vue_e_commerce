export const options = [
    [
        "Menos de US$20", "US$20 a US$40", "US$40 +",
    ],
    [
        "Disponible", "Preventa"
    ],
    [

    ],
    [
        "Tapa blanda",
        "Tapa dura",
        "Audio",
        "Papelería",
        "Digital",
        "Libros para bebés",
        "Juguetes",
        "Mapas"
    ]

]

export const categories = [
    "Art & Photography",
    "Biography",
    "Business, Finance & Law",
    "Children´s Books",
    "Computing",
    "Craft & Hobbies",
    "Dictionaries & Languajes",
    "Entertainment",
    "Health",
    "History & Archeology"

]

const addPlaceHolder = (arr) => {
    const newArr = arr.map(el => ["Ver todo", ...el])
    return newArr
}

export const dataArr = addPlaceHolder(options)