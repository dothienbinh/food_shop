import { useEffect, useState } from 'react';

import HeadlessTippy from '@tippyjs/react/headless'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

import { Wrapper as PopperWrapper } from './Popper';
import AccountItem from './AccountItem';

function Search() {
    const [searchResult, setSearchResult] = useState([])

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2, 3]);
        }, 1000);
    }, []);


  return (
    <HeadlessTippy
        interactive 
        visible = {searchResult.length > 0}
        render = {(attrs) => {
            <div className="search-result" tabIndex="-1" {...attrs}>
                <PopperWrapper>
                    <h4 className="search-title">Accounts</h4>
                    <AccountItem/>
                    <AccountItem/>
                    <AccountItem/>
                    <AccountItem/>
                </PopperWrapper>
            </div>
        }}

    >
    <div className="search">
      <input placeholder="Search..." spellCheck={false} />
      <button className="clear">
        <FontAwesomeIcon icon={faCircleXmark} />
      </button>
      <button className="search-btn">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
    </div>
    </HeadlessTippy>
  );
}

export default Search;
