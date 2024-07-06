import React, { useState } from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Checkbox, Collapse } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { Department } from '../models/Department';

interface DepartmentListProps {
  departments: Department[];
}

const DepartmentList: React.FC<DepartmentListProps> = ({ departments }) => {
  const [open, setOpen] = useState<{ [key: string]: boolean }>({});
  const [checked, setChecked] = useState<{ [key: string]: boolean }>({});

  const handleToggle = (department: string) => {
    setOpen(prev => ({ ...prev, [department]: !prev[department] }));
  };

  const handleCheck = (item: string, isDepartment: boolean, department?: string) => {
    setChecked(prev => {
      const newChecked = { ...prev, [item]: !prev[item] };
      if (isDepartment) {
        departments.find(d => d.department === item)?.sub_departments.forEach(sub => {
          newChecked[sub] = newChecked[item];
        });
      } else if (department) {
        const allSubChecked = departments
          .find(d => d.department === department)
          ?.sub_departments.every(sub => newChecked[sub]);
        newChecked[department] = !!allSubChecked;
      }
      return newChecked;
    });
  };

  return (
    <List>
      {departments.map((dept) => (
        <React.Fragment key={dept.department}>
          <ListItem button onClick={() => handleToggle(dept.department)}>
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={checked[dept.department] || false}
                tabIndex={-1}
                disableRipple
                onClick={(e) => {
                  e.stopPropagation();
                  handleCheck(dept.department, true);
                }}
              />
            </ListItemIcon>
            <ListItemText primary={dept.department} />
            {open[dept.department] ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open[dept.department]} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {dept.sub_departments.map((sub) => (
                <ListItem key={sub} sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <Checkbox
                      edge="start"
                      checked={checked[sub] || false}
                      tabIndex={-1}
                      disableRipple
                      onClick={() => handleCheck(sub, false, dept.department)}
                    />
                  </ListItemIcon>
                  <ListItemText primary={sub} />
                </ListItem>
              ))}
            </List>
          </Collapse>
        </React.Fragment>
      ))}
    </List>
  );
};

export default DepartmentList;