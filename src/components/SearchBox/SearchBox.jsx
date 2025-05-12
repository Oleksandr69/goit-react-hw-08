import css from './SearchBox.module.css';
import { useDispatch } from "react-redux";
import { changeFilter } from '../../redux/filters/slice';
import { useSelector } from 'react-redux';
import { selectNameFilter } from '../../redux/filters/selectors';

const SearchBox = () => {
    const search = useSelector(selectNameFilter);
    // console.log(search);
    const dispatch = useDispatch();

    const handleOnChange = (e) => dispatch(changeFilter(e.target.value));

    return (
    <div className={css.search}>
        <p >Find contacts by name.</p>
            <input
                type='text'
                value = {search}
                onChange={handleOnChange} 
             className={css.inputSearch} />
    </div>
 )}

export default SearchBox;
