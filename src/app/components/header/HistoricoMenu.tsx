"use client";

import {
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from "@chakra-ui/react";
import React from "react";
import { Historico } from "../icons/ready-to-use/Historico";
import { Plus } from "../icons/ready-to-use";

export function HistoricoMenu() {
  return (
    // <Menu>
    //   <MenuButton
    //     as={Button}
    //     className="group hover:bg-black flex items-center gap-3 py-3 px-4 bg-white text-purple rounded-3xl text-xs mt-[0.5px]"
    //   >
    //     <div className="flex gap-3 items-center">
    //       <Historico
    //         className="group-hover:fill-slate-900"
    //         height="20"
    //         width="20"
    //       />
    //       <span className="group-hover:text-white">Histórico</span>
    //       <Plus // TODO: Pedir icone de dropdown menu
    //         className="group-hover:fill-slate-900"
    //         height="20"
    //         width="20"
    //       />
    //     </div>
    //   </MenuButton>
    //   <MenuList>
    //     <MenuItem className="hover:bg-slate-300">Download</MenuItem>
    //     <MenuItem>Create a Copy</MenuItem>
    //     <MenuItem>Mark as Draft</MenuItem>
    //     <MenuItem>Delete</MenuItem>
    //     <MenuItem>Attend a Workshop</MenuItem>
    //   </MenuList>
    // </Menu>
    <Popover placement="bottom-end">
      <PopoverTrigger>
        <Button className="group hover:bg-black flex items-center gap-3 py-3 px-4 bg-white text-purple rounded-3xl text-xs mt-[0.5px]">
          <div className="flex gap-3 items-center">
            <Historico
              className="group-hover:fill-slate-900"
              height="20"
              width="20"
            />
            <span className="group-hover:text-white">Histórico</span>
            <Plus // TODO: Pedir icone de dropdown menu
              className="group-hover:fill-slate-900"
              height="20"
              width="20"
            />
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="rounded-xl">
        <PopoverArrow />
        {/* <PopoverCloseButton /> */}
        {/* <PopoverHeader>Confirmation!</PopoverHeader> */}
        <PopoverBody>
          <div>
            <ul className="text-xs">
              <li className="flex flex-col p-1 gap-1">
                <div className="flex items-center justify-between">
                  <span>Data - hora</span>
                  <span>100.000,00 €</span>
                </div>
                <hr className="border-lightPurple" />
              </li>
              <li className="flex flex-col p-1 gap-1">
                <div className="flex items-center justify-between">
                  <span>Data - hora</span>
                  <span>100.000,00 €</span>
                </div>
                <hr className="border-lightPurple" />
              </li>
              <li className="flex flex-col p-1 gap-1">
                <div className="flex items-center justify-between">
                  <span>Data - hora</span>
                  <span>100.000,00 €</span>
                </div>
              </li>
            </ul>
          </div>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}
