import { reactive } from 'vue';
import shoesData from '../../public/data.json';

export function useShoeFilter() {
  const selectedOptions = reactive({
    color: '',
    size: '',
  });

  function setSelectedOptions(value) {
    if (value !== undefined) {
      selectedOptions.color = value.color;
      selectedOptions.size = value.size;
    }
  }

  function filterShoesByGender(gender, color, size) {
    const shoes = shoesData.filter((shoe) => shoe.gender === gender);
    return checkSelectedOptions(shoes, color, size);
  }

  function filterShoesByType(type, color, size) {
    const shoes = shoesData.filter((shoe) => shoe.type === type);
    return checkSelectedOptions(shoes, color, size);
  }

  function checkSelectedOptions(shoes, color, size) {
    if (color === 'All colors' && size === 'All sizes') {
      return shoes;
    } else {
      return shoes.filter((shoe) => {
        return (
          (color === 'All colors' || color === shoe.color) &&
          (size === 'All sizes' || shoe.size.includes(size))
        );
      });
    }
  }

  return {
    selectedOptions,
    setSelectedOptions,
    filterShoesByGender,
    filterShoesByType,
  };
}
