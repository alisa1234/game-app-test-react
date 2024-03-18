import useGenres from "../hooks/useGenres";
import {Button, Heading, HStack, Image, List, ListItem, Spacer} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";
import useGameQueryStore from "../store";

const GenreList = () => {
  const {data, isLoading, error} = useGenres();
  const selectedGenreId = useGameQueryStore(s => s.gameQuery.genreId);
  const setSelectedGenreId = useGameQueryStore(s => s.setGenreId);

  if (error) return null;
  if (isLoading) return <Spacer/>;
  return (
          <>
            <Heading fontSize={'2xl'} marginBottom={3}>Genres</Heading>
            <List>
              {data?.results.map(genre => <ListItem key={genre.id} paddingY={'5px'}>
                <HStack>
                  <Image
                          objectFit={'cover'}
                          boxSize={'32px'}
                          borderRadius={8}
                          src={getCroppedImageUrl(genre.image_background)}/>
                  <Button
                          whiteSpace={'normal'}
                          fontWeight={genre.id === selectedGenreId ? 'bold' : 'normal'}
                          fontSize={'lg'} variant={'link'}
                          onClick={() => setSelectedGenreId(genre.id)}>{genre.name}</Button>
                </HStack>
              </ListItem>)}
            </List>
          </>
  )
}
export default GenreList;