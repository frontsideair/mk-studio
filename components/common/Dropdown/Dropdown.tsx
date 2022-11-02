import { FC } from 'react';
import { IndexQuery_menu_items } from 'types/IndexQuery';

import DropdownItem from '../DropdownItem';

interface DropDownProps {
  items: (IndexQuery_menu_items | null)[] | null;
}

const DropDown: FC<DropDownProps> = ({ items }) => {
  if (items?.length === 0 || !items) {
    return null;
  }
  if (items.every((item) => !item)) {
    return null;
  }
  return (
    <>
      {items.map((item) =>
        item ? <DropdownItem key={item.title} item={item} /> : null
      )}
    </>
  );
};

export default DropDown;
