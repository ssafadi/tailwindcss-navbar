import React from 'react';

export default function Dropdown({ title, children, chevron = true }) {
    const [showDropdown, setDropdown] = React.useState(false);
    const toggleDropdown = () => setDropdown(!showDropdown);
    const style2 = "inline-flex justify-center w-full rounded-md bg-gray-200 shadow-sm px-3 py-1 bg-white text-sm text-gray-700 hover:bg-gray-50 focus:outline-none";
    return (

        <div className="relative inline-block text-left m-1">
            <div>
                <button type="button" id="options-menu" aria-expanded="true" aria-haspopup="true"
                    className={style2}
                    onClick={toggleDropdown}>
                    {title || 'Options'}
                    {chevron ? <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg> : <></>}

                </button>
            </div>

            {showDropdown ?
                <div className="origin-top-right absolute right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <div className="py" role="none" onClick={toggleDropdown}>
                        {Array.isArray(children) ?
                            children.map((child, i) =>
                                <div role="menuitem" key={i} className="block px-4 py-2 text-xs text-gray-700 hover:bg-gray-100 hover:text-gray-900" >{child}</div>)
                            : children}
                    </div>
                </div> : <></>}
        </div>
    );
}