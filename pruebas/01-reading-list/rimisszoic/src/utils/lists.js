import { DETAIILS_OF_LISTS } from '../constants/details-of-lists'

export const findListDetails = (listId) =>
    DETAIILS_OF_LISTS.find(({ id }) => id === listId)