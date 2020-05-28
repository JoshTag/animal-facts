import React, { useState } from "react"
import data from "../../../data/data.js"

// Material UI components
import IconButton from "@material-ui/core/IconButton"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import MoreVertIcon from "@material-ui/icons/MoreVert"

const ITEM_HEIGHT = 100

const Select = ({ stopCycle, changeShapes }) => {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const titleCase = str => {
    str = str.split(" ")
    for (let i = 0; i < str.length; i++) {
      str[i] = str[i][0].toUpperCase() + str[i].slice(1)
    }
    return str.join(" ")
  }

  return (
    <div>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "20ch",
          },
        }}
      >
        {Object.entries(data).sort().map(option => {
          const animal = option[0]
          const path = option[1]
          return (
            <MenuItem
              key={animal}
              onClick={() => {
                handleClose()
                stopCycle()
                changeShapes(path, animal)
              }}
            >
              {titleCase(animal)}
            </MenuItem>
          )
        })}
      </Menu>
    </div>
  )
}

export default Select
