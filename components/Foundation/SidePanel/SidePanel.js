"use client";

import * as React from "react";
import { comments, notes } from "@/sample-data/DiscussionData";
import MailIcon from "@mui/icons-material/Mail";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { GiHamburgerMenu } from "react-icons/gi";
import DiscussionPlane from "./DiscussionPlane";
import JoinConversationButton from "./JoinConversationButton";
import LessonItem from "./LessonItem";
import ProgressBar from "./ProgressBar";
import SortByPill from "./SortByPillBox";

export default function SidePanel() {
  const [open, setOpen] = React.useState(false);

  // Function to toggle the drawer open or closed
  const toggleDrawer = (newOpen) => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box
      sx={{ width: 500 }}
      role="presentation"
      className="bg-[#F8F9FDCC] sm:w-full md:w-[380px] lg:w-[500px] xs:w-full"
    >
      <div className="mt-[2vh] ml-[2vw]">
        <div className="text-2xl font-bold">Progress</div>
        <div className="pt-2">
          <p className="inline font-black">2</p>
          <p className="inline">/7 COMPLETED</p>
        </div>
        <ProgressBar completedSteps="2" />
        <div className="mt-[3vh] space-y-3">
          <LessonItem
            lessonNumber={1}
            lessonTitle={"Sanctification (to be set..."}
            isAccessible={true}
          />
          <LessonItem
            lessonNumber={2}
            lessonTitle={"Singles/Married To Christ"}
            isAccessible={true}
          />
          <LessonItem
            lessonNumber={3}
            lessonTitle={"Singles/Married To Christ"}
            isAccessible={false}
          />
          <LessonItem
            lessonNumber={4}
            lessonTitle={"Purpose of Marriage"}
            isAccessible={false}
          />
          <LessonItem
            lessonNumber={5}
            lessonTitle={"Rely on Your Wife for Your Sustenance"}
            isAccessible={false}
          />
          <LessonItem
            lessonNumber={6}
            lessonTitle={"The Flesh vs. The Spirit"}
            isAccessible={false}
          />
          <LessonItem
            lessonNumber={7}
            lessonTitle={"Fight One Day at a Time"}
            isAccessible={false}
          />
        </div>
        <Divider className="mt-[2vh]" />
        <div className="text-2xl font-bold mt-[2vh] mb-[1vh]">Discussions</div>
        <div className="flex flex-row items-center justify-between mx-5">
          <DiscussionPlane comments={comments} notes={notes} />
        </div>
        <div className="flex items-center justify-center">
          <JoinConversationButton />
        </div>
      </div>
    </Box>
  );

  return (
    <div>
      <Button
        onClick={() => toggleDrawer(true)} // Toggle drawer open
        className="bg-[#7D899D1A] text-[#717171] rounded-xl w-12 h-12 flex justify-center items-center max-xs:h-6 max-xs:w-6 max-sm:h-8 max-sm:w-8"
      >
        <GiHamburgerMenu />
      </Button>
      <Drawer
        open={open}
        onClose={() => toggleDrawer(false)} // Close drawer when the user clicks outside
        anchor="right"
      >
        {DrawerList}
      </Drawer>
    </div>
  );
}
