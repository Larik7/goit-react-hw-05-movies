import { RxDoubleArrowLeft } from 'react-icons/rx';
import { GoBackBox, GoBackLink } from './BackLink.styled';

export const BackLink = ({ to }) => {
  return (
    <GoBackBox>
      <GoBackLink to={to}>
        {' '}
        <RxDoubleArrowLeft size={16} /> Go back{' '}
      </GoBackLink>
    </GoBackBox>
  );
};