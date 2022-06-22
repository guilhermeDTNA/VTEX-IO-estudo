import React from 'react';
import {useCssHandles} from 'vtex.css-handles';

import "./index.css";

const CSS_HANDLES = ['wishlistButtonContainer', 'wishlistButtonText'];

const WishlistButton = ({AddListenBtn}) => {
    const handles = useCssHandles(CSS_HANDLES);

    const handleClick = () => {
        const WishlistButton = document.querySelector(".simplesinovacao-store-theme-0-x-wishlistButtonContainer button");
        WishlistButton && WishlistButton.click();
    }

    return (
        <div onClick={handleClick} className={`${handles.wishlistButtonContainer}`}>
            <AddListenBtn />
            <span className={`${handles.wishlistButtonText}`}>Add to wishlist</span>
        </div>
    )
}

export default WishlistButton;