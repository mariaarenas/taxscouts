import { itemsActions } from "./items-slice";
import axios from "axios";

export const fetchData = (searchValue, lang) => {
  return async (dispatch) => {
    const getItems = async () => {
      const response = await axios.get(
        `https://openlibrary.org/search.json?q=language:${lang}&title=${searchValue}&limit=5&sort=title`
      );

      /*const response = await axios.get(
        "https://openlibrary.org/search.json?q=the+lord+of+the+rings&limit=10"
      );*/

      const items = await response.data;
      return items;
    };

    try {
      const data = await getItems();
      dispatch(
        itemsActions.replaceItems({
          items: data.docs || [],
        })
      );
      console.log(data.docs);
    } catch (error) {
      console.log(error);
    }
  };
};
