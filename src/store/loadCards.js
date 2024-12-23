import axios from "axios";
import { setCards, setError, setLoading } from "./cardArraySlice";

export const loadCards = () => async (dispatch) => {
    dispatch(setLoading(true));
    try {
        const response = await axios.get(
            "https://raw.githubusercontent.com/BrunnerLivio/PokemonDataGraber/master/output.json"
        );
        const cards = response.data.slice(0, 15).map((el) => ({
            id: el.Number,
            title: el.Name,
            text: el.About,
            isActive: false,
        }));
        dispatch(setCards(cards));
        dispatch(setError(null));
    } catch (error) {
        dispatch(setError(error.message));
    } finally {
        dispatch(setLoading(false));
    }
};
