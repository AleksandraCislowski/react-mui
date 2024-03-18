import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import food1 from "../images/food1.jpg";
import food2 from "../images/food2.jpg";
import food3 from "../images/food3.jpg";
import food4 from "../images/food4.jpg";
import food5 from "../images/food5.jpg";
import food6 from "../images/food6.jpg";

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position='fixed' width={300}>
        <Typography variant='h6' fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup max={7}>
          <Avatar
            alt='Remy Sharp'
            src='https://mui.com/static/images/avatar/1.jpg'
          />
          <Avatar
            alt='Travis Howard'
            src='https://mui.com/static/images/avatar/2.jpg'
          />
          <Avatar alt='Cindy Baker' src='/static/images/avatar/3.jpg' />
          <Avatar
            alt='Agnes Walker'
            src='https://mui.com/static/images/avatar/4.jpg'
          />
          <Avatar
            alt='Trevor Henderson'
            src='https://mui.com/static/images/avatar/5.jpg'
          />
          <Avatar alt='Remy Sharp' src='/static/images/avatar/1.jpg' />
          <Avatar alt='Travis Howard' src='/static/images/avatar/2.jpg' />
          <Avatar
            alt='Cindy Baker'
            src='https://mui.com/static/images/avatar/3.jpg'
          />
          <Avatar alt='Agnes Walker' src='/static/images/avatar/4.jpg' />
          <Avatar alt='Trevor Henderson' src='/static/images/avatar/5.jpg' />
        </AvatarGroup>
        <Typography variant='h6' fontWeight={100} mt={2} mb={2}>
          Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5} variant='woven'>
          <ImageListItem>
            <img src={food1} alt='A salad bowl'></img>
          </ImageListItem>
          <ImageListItem>
            <img src={food2} alt='A piece of cake'></img>
          </ImageListItem>
          <ImageListItem>
            <img src={food3} alt='A pizza'></img>
          </ImageListItem>
          <ImageListItem>
            <img src={food4} alt='A fruit board'></img>
          </ImageListItem>
          <ImageListItem>
            <img src={food5} alt='Pancakes'></img>
          </ImageListItem>
          <ImageListItem>
            <img src={food6} alt='Waffles'></img>
          </ImageListItem>
        </ImageList>
        <Typography variant='h6' fontWeight={100} mt={2} mb={2}>
          Latest Conversations
        </Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems='flex-start'>
            <ListItemAvatar>
              <Avatar
                alt='Remy Sharp'
                src='https://mui.com/static/images/avatar/1.jpg'
              />
            </ListItemAvatar>
            <ListItemText
              primary='Brunch this weekend?'
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component='span'
                    variant='body2'
                    color='text.primary'
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant='inset' component='li' />
          <ListItem alignItems='flex-start'>
            <ListItemAvatar>
              <Avatar
                alt='Travis Howard'
                src='https://mui.com/static/images/avatar/2.jpg'
              />
            </ListItemAvatar>
            <ListItemText
              primary='Summer BBQ'
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component='span'
                    variant='body2'
                    color='text.primary'
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant='inset' component='li' />
          <ListItem alignItems='flex-start'>
            <ListItemAvatar>
              <Avatar
                alt='Cindy Baker'
                src='https://mui.com/static/images/avatar/3.jpg'
              />
            </ListItemAvatar>
            <ListItemText
              primary='Oui Oui'
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component='span'
                    variant='body2'
                    color='text.primary'
                  >
                    Sandra Adams
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Rightbar;
