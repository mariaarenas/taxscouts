import { Book } from "../model/Book";
import { itemsActions } from "./items-slice";
import axios from "axios";

// resources
import { config } from "../resources/config";
import i18n from "../translation/i18n";

export const fetchData = (searchValue) => {
  return async (dispatch) => {
    const getItems = async () => {
      // retrieve records based on input value and language sorted by edition
      const response = await axios.get(
        `https://openlibrary.org/search.json?q=language:${i18n.language}&title=${searchValue}&limit=${config.default_limit}&sort=editions`
      );

      /*const response = await axios.get(
        "https://openlibrary.org/search.json?q=the+lord+of+the+rings&limit=2"
      );*/

      const items = await response.data;
      return items;
    };

    try {
      const data = await getItems();
      // get an array of books based only on the properties I need
      let books = data.docs.map((element) => {
        return JSON.stringify(
          new Book(
            element.title,
            element.author_name,
            `https://covers.openlibrary.org/b/id/${element.cover_i}-M.jpg`,
            element.key,
            element.id_amazon
          )
        );
      });
      console.log(data.docs);
      // update list of items to show
      dispatch(
        itemsActions.replaceItems({
          items: books || [],
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
};
