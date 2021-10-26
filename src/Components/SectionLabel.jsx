import PropTypes from 'prop-types';
import { StyledSectionLabel } from './Styled/SectionLabel.styled';
const SectionLabel = ({ text, number}) => {
  return (
    <>
      <StyledSectionLabel>{text} ({number})</StyledSectionLabel>
    </>
  )
}

SectionLabel.propTypes = {
  text: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired
}

export default SectionLabel;