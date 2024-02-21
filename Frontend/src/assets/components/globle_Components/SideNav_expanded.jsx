import React from 'react'

const SideNav_expanded = () => {
  return (
    <div>
           <Card
          style={{ height: "100vh", position: "fixed" }}
          className=" py-4 flex-col justify-between items-center w-auto "
        >
          <CardHeader className="flex-col justify-center items-center w-auto">
            <div className="flex items-center gap-4">
              <Dropdown placement="bottom-end">
                <DropdownTrigger>
                  <Avatar
                    isBordered
                    as="button"
                    className="transition-transform"
                    src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                  />
                </DropdownTrigger>
                <DropdownMenu aria-label="Profile Actions" variant="flat">
                  <DropdownItem key="profile" className="h-14 gap-2">
                    <p className="font-semibold">Signed in as</p>
                    <p className="font-semibold">zoey@example.com</p>
                  </DropdownItem>
                  <DropdownItem key="settings">My Settings</DropdownItem>
                  <DropdownItem key="team_settings">Team Settings</DropdownItem>
                  <DropdownItem key="analytics">Analytics</DropdownItem>
                  <DropdownItem key="system">System</DropdownItem>
                  <DropdownItem key="configurations">
                    Configurations
                  </DropdownItem>
                  <DropdownItem key="help_and_feedback">
                    Help & Feedback
                  </DropdownItem>
                  <DropdownItem key="logout" color="danger">
                    Log Out
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          </CardHeader>
          <CardBody className="flex-col justify-center items-center w-auto gap-4">
            <button>
            <Home /> 
            </button> <button>
            <Message />
            </button> <button>
            <CreatPost />
            </button> <button>
            <Explore />
            </button>
      
          
       
          <button>

            <Bookmark />
          </button>
          </CardBody>
          <CardFooter className="flex-col justify-center items-center w-auto">
           <button>
             <FontAwesomeIcon icon={faGear} size="xl" />
            </button>
          </CardFooter>
        </Card>
    </div>
  )
}

export default SideNav_expanded