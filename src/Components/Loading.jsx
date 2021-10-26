import { StyledLoadingAnim } from "./Styled/LoadingAnim.styled";
import { useSelector } from "react-redux";
const LoadingSpinner = () => {
  const isLoading = useSelector(state => state.loading);

  return (
    <StyledLoadingAnim className={isLoading ? "is--loading" : ""}>
      <div id="loading-spinner"></div>
    </StyledLoadingAnim>
  )
}

export default LoadingSpinner;