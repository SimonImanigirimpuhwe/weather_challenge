import { Button } from '@chakra-ui/react'
import PropTypes from 'prop-types';



const CustomButton = ({
    title, 
    colorScheme, 
    variant, 
    isLoading, 
    loadingText, 
    size, 
    handleClick,
     ...props
    }) => {

    return (
        <Button 
            colorScheme={colorScheme}
            variant={variant}
            isLoading={isLoading}
            loadingText={loadingText}
            size={size}
            onClick={handleClick}
            {...props}
        >
        {title}
        </Button>
    )
};

export default CustomButton;


CustomButton.propTypes = {
    title: PropTypes.string,
    colorScheme: PropTypes.string,
    variant: PropTypes.oneOf(['solid', 'ghost', 'outline', 'link']),
    isLoading: PropTypes.bool,
    loadingText: PropTypes.string,
    size: PropTypes.string,
    handleClick: PropTypes.func
};

CustomButton.defaultProps = {
    title: 'Save',
    colorScheme: 'blue',
    variant: 'solid',
    isLoading: false,
    loadingText: "Submitting",
    size: "md",
    handleClick: null
}