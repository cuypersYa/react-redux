import React from 'react'
import { Menu , Feed} from 'semantic-ui-react'


const MenuList = ({name,descr,img, onClick, value }) => (
    
    <Menu.Item name={name} onClick={() => onClick(name) } value={value}> 
        <Feed>
            <Feed.Event>
                <Feed.Label className='left col-6 img-circle' image={img} />
                <Feed.Content className='left col-6'>
                    <Feed.Label>
                        <h3 className="blue">{name}</h3>
                    </Feed.Label>
                    <Feed.Summary>
                    {descr}
                    </Feed.Summary>
                </Feed.Content>
            </Feed.Event>
        </Feed>
    </Menu.Item>
)

export default MenuList