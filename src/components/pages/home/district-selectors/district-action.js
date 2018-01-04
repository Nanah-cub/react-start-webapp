import { CHANGE_DISTRICT } from '../../../../store/constants/app-constants';

export const changeDistrict = function(district) {
  return {
    type: CHANGE_DISTRICT,
    district: district
  };
};
