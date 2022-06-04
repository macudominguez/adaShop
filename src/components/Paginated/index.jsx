import { Button, Flex} from '@chakra-ui/react'
import { BsFillArrowLeftSquareFill, BsFillArrowRightSquareFill } from 'react-icons/bs'

const Paginated = ({lastPage, page, setPage}) =>{
    return(
        <Flex justify="center">
            <Button colorScheme='teal' variant='link' m="4" onClick={()=> setPage(page - 1 )} disabled={page === 1} >
                <BsFillArrowLeftSquareFill size="35"/>
            </Button>
            <Button colorScheme='teal' variant='link' m="4" onClick={()=> setPage(page + 1)} disabled={page === lastPage} >
                <BsFillArrowRightSquareFill size="35"/>
            </Button>
        </Flex>
    )
}
export default Paginated