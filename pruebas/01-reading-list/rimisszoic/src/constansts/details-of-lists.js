import { BookIcon, CheckIcon } from '../components/Icons'

export const LISTS_ID = {
    BOOKS_TO_BE_READ: 'BOOKS_TO_BE_READ',
    BOOKS_READ: 'BOOKS_READ'
}

const { BOOKS_TO_BE_READ, BOOKS_READ } = LISTS_ID

export const DETAIILS_OF_LISTS = [
    {
        id: BOOKS_TO_BE_READ,
        title: 'Libros por leer',
        Icon: BookIcon,
        color: 'white'
    },
    {
        id: BOOKS_READ,
        title: 'Libros leídos',
        Icon: CheckIcon,
        color: 'green'
    }
]