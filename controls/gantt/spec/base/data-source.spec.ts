/**
 * Gantt data-source spec
 */
export let projectResources: Object[] = [
    { ResourceId: 1, ResourceName: 'Project Manager' },
    { ResourceId: 2, ResourceName: 'Software Analyst' },
    { ResourceId: 3, ResourceName: 'Developer' },
    { ResourceId: 4, ResourceName: 'Testing Engineer' }
];

export let filteredData: Object[] = [
    {
        TaskID: 1,
        TaskName: 'Launch and flight to lunar orbit',
        StartDate: new Date('07/16/1969'),
        subtasks: [
            {
                TaskID: 2, TaskName: 'Apollo 11 blasts off from launch pad', StartDate: new Date('07/16/1969 03:32:00 AM'),
                EndDate: new Date('07/16/1969 03:32:00 AM'), Duration: 0,
            },
            {
                TaskID: 3, TaskName: 'Entry to Earth’s orbit', StartDate: new Date('07/16/1969 03:32:00 AM'),
                EndDate: new Date('07/16/1969 03:44:00 AM'), Predecessor: '2FS'
            },
            {
                TaskID: 4, TaskName: 'Travelling in earth’s orbit', StartDate: new Date('07/16/1969 03:44:00 AM'),
                EndDate: new Date('07/16/1969 04:22:13 AM'), Predecessor: '3FS'
            },
            {
                TaskID: 5, TaskName: 'Trajectory change toward the Moon', StartDate: new Date('07/16/1969 04:22:13 AM'),
                EndDate: new Date('07/16/1969 04:52:00 AM'), Predecessor: '4FS'
            },
            {
                TaskID: 6, TaskName: 'Extraction maneuver performed', StartDate: new Date('07/16/1969 04:52:00 AM'),
                EndDate: new Date('07/16/1969 04:52:00 AM'), Predecessor: '5FS'
            },
            {
                TaskID: 7, TaskName: 'Travelling toward moon and entering into lunar orbit', StartDate: new Date('07/16/1969 04:52:00 AM'),
                EndDate: new Date('07/16/1969 04:21:50 PM'), Predecessor: '6FS'
            },
            {
                TaskID: 8, TaskName: 'Midcourse correction, sharpening the course and testing the engine',
                StartDate: new Date('07/16/1969 11:22:00 PM'), EndDate: new Date('07/17/1969 05:21:50 AM')
            },
            {
                TaskID: 9, TaskName: 'Reached half the distance spanning between earth and moon',
                StartDate: new Date('07/17/1969 05:22:00 AM'), EndDate: new Date('07/17/1969 08:00:50 PM')
            },
            {
                TaskID: 10, TaskName: 'Reached 3/4th distance spanning between earth and moon',
                StartDate: new Date('07/17/1969 8:02:00 PM'), EndDate: new Date('07/18/1969 04:21:50 PM')
            },
            {
                TaskID: 11, TaskName: 'Reached distance 45000 miles from moon',
                StartDate: new Date('07/18/1969 11:22:00 PM'), EndDate: new Date('07/19/1969 05:21:50 PM')
            },
        ]
    },
    {
        TaskID: 12,
        TaskName: 'Lunar descent',
        StartDate: new Date('07/19/1969 05:21:50 PM'),
        subtasks: [
            {
                TaskID: 13, TaskName: 'Lunar Orbiting (30 orbits)', StartDate: new Date('07/19/1969 05:21:50 PM'),
                EndDate: new Date('07/20/1969 12:52:00 AM'), Predecessor: '11FS'
            },
            {
                TaskID: 14, TaskName: 'Landing site identified', StartDate: new Date('07/20/1969 12:52:00 AM'),
                EndDate: new Date('07/20/1969 12:52:00 AM'), Predecessor: '13FS'
            },
            {
                TaskID: 15, TaskName: 'Eagle separated from Columbia.', StartDate: new Date('07/20/1969 05:44:00 PM'),
                EndDate: new Date('07/20/1969 05:44:00 PM')
            },
            {
                TaskID: 16, TaskName: 'Eagle’s decent to Moon', StartDate: new Date('07/20/1969 05:44:00 PM'),
                EndDate: new Date('07/20/1969 08:16:40 PM'), Predecessor: '15FS'
            }
        ]
    },
    {
        TaskID: 17,
        TaskName: 'Landing',
        StartDate: new Date('07/20/1969 08:17:40 PM'),
        subtasks: [
            {
                TaskID: 18, TaskName: 'Eagle’s touch down', StartDate: new Date('07/20/1969 08:17:40 PM'),
                EndDate: new Date('07/20/1969 08:17:40 PM')
            },
            {
                TaskID: 19, TaskName: 'Radio communication and Performing post landing checklist',
                StartDate: new Date('07/20/1969 08:17:40 PM'), EndDate: new Date('07/20/1969 11:43:00 PM'), Predecessor: '18FS'
            },
            {
                TaskID: 20, TaskName: 'Preparations for EVA (Extra Vehicular Activity)',
                StartDate: new Date('07/20/1969 11:43:00 PM'), EndDate: new Date('07/21/1969 02:39:33 AM'), Predecessor: '19FS'
            },
            {
                TaskID: 21, TaskName: 'Hatch open and climbing down the moon', StartDate: new Date('07/21/1969 02:39:33 AM'),
                EndDate: new Date('07/21/1969 02:56:15 AM'), Predecessor: '20FS'
            },
            {
                TaskID: 22, TaskName: 'Armstrong stepped down on the moon', StartDate: new Date('07/21/1969 02:56:15 AM'),
                EndDate: new Date('07/21/1969 03:11:00 AM'), Predecessor: '21FS'
            },
        ]
    },
    {
        TaskID: 23,
        TaskName: 'Lunar surface operations',
        StartDate: new Date('07/21/1969'),
        subtasks: [
            {
                TaskID: 24, TaskName: 'Soil sample collections', StartDate: new Date('07/21/1969 02:56:15 AM'),
                EndDate: new Date('07/21/1969 03:11:00 AM')
            },
            {
                TaskID: 25, TaskName: 'Aldrin joined Armstrong', StartDate: new Date('07/21/1969 03:11:00 AM'),
                EndDate: new Date('07/21/1969 03:41:00 AM'), Predecessor: '24FS'
            },
            {
                TaskID: 26, TaskName: 'Planted the Lunar Flag Assembly', StartDate: new Date('07/21/1969 03:41:00 AM'),
                EndDate: new Date('07/21/1969 03:46:00 AM'), Predecessor: '25FS'
            },
            {
                TaskID: 27, TaskName: 'President Richard Nixon’s telephone-radio transmission ',
                StartDate: new Date('07/21/1969 03:48:00 AM'), EndDate: new Date('07/21/1969 03:51:00 AM')
            },
            {
                TaskID: 28, TaskName: 'Collect rock samples, photos and other mission controls',
                StartDate: new Date('07/21/1969 03:52:00 AM'), EndDate: new Date('07/21/1969 04:50:00 AM')
            },
        ]
    },
    {
        TaskID: 29,
        TaskName: 'Lunar ascent',
        StartDate: new Date('07/21/1969'),
        subtasks: [
            {
                TaskID: 30, TaskName: 'Climbing the eagle to ascent', StartDate: new Date('07/21/1969 04:51:00 AM'),
                EndDate: new Date('07/21/1969 05:00:00 AM')
            },
            {
                TaskID: 31, TaskName: 'Hatch closing', StartDate: new Date('07/21/1969 05:01:00 AM'),
                EndDate: new Date('07/21/1969 05:01:00 AM'), Predecessor: '30FS'
            },
            {
                TaskID: 32, TaskName: 'Final housekeeping', StartDate: new Date('07/21/1969 05:02:00 AM'),
                EndDate: new Date('07/21/1969 08:00:00 AM')
            },
            {
                TaskID: 33, TaskName: 'Resting of astronauts', StartDate: new Date('07/21/1969 08:00:00 AM'),
                EndDate: new Date('07/21/1969 03:00:00 PM'), Predecessor: '32FS'
            },
            {
                TaskID: 34, TaskName: 'Preparation for lift off and Ascent engine started', StartDate: new Date('07/21/1969 03:00:00 PM'),
                EndDate: new Date('07/21/1969 05:54:00 PM'), Predecessor: '33FS'
            },
            {
                TaskID: 35, TaskName: 'Eagle lifted off', StartDate: new Date('07/21/1969 05:54:00 PM'),
                EndDate: new Date('07/21/1969 05:54:00 PM'), Predecessor: '34FS'
            },
            {
                TaskID: 36, TaskName: 'Eagle’s travel toward Columbia', StartDate: new Date('07/21/1969 05:54:00 PM'),
                EndDate: new Date('07/21/1969 09:23:00 PM'), Predecessor: '35FS'
            },
        ]
    },
    {
        TaskID: 37,
        TaskName: 'Return',
        StartDate: new Date('07/21/1969 09:24:00 PM'),
        subtasks: [
            {
                TaskID: 38, TaskName: 'Eagle docked with Columbia', StartDate: new Date('07/21/1969 09:24:00 PM'),
                EndDate: new Date('07/21/1969 09:35:00 PM')
            },
            {
                TaskID: 39, TaskName: 'Eagle’s ascent stage jettisoned into lunar orbit', StartDate: new Date('07/21/1969 09:35:00 PM'),
                EndDate: new Date('07/21/1969 11:41:00 PM'), Predecessor: '38FS'
            },
        ]
    },
    {
        TaskID: 40,
        TaskName: 'Decent toward earth  and Splashdown',
        StartDate: new Date('07/21/1969'),
        subtasks: [
            {
                TaskID: 41, TaskName: 'Spacecraft reaches 1/4th distance spanning between moon and earth',
                StartDate: new Date('07/21/1969 11:50:00 PM'), EndDate: new Date('07/22/1969 04:40:00 PM')
            },
            {
                TaskID: 42, TaskName: 'Spacecraft travels to midway point of journey',
                StartDate: new Date('07/22/1969 04:40:00 PM'), EndDate: new Date('07/23/1969 04:00:00 PM'), Predecessor: '41FS'
            },
            {
                TaskID: 43, TaskName: 'Spacecraft travels to 3/4th point of journey', StartDate: new Date('07/23/1969 04:40:00 PM'),
                EndDate: new Date('07/24/1969 10:00:00 AM'), Predecessor: '42FS'
            },
            {
                TaskID: 44, TaskName: 'Crew prepares for splashdown', StartDate: new Date('07/24/1969 11:47:00 AM'),
                EndDate: new Date('07/24/1969 04:20:00 PM')
            },
            {
                TaskID: 45, TaskName: 'Command and service modules separates', StartDate: new Date('07/24/1969 04:20:00 PM'),
                EndDate: new Date('07/24/1969 04:35:00 PM'), Predecessor: '44FS'
            },
            {
                TaskID: 46, TaskName: 'Command module re-enters the Earth’s atmosphere', StartDate: new Date('07/24/1969 04:35:00 PM'),
                EndDate: new Date('07/24/1969 04:50:00 PM'), Predecessor: '45FS'
            },
            {
                TaskID: 47, TaskName: 'Spacecraft splashes near USS hornet', StartDate: new Date('07/24/1969 04:51:00 PM'),
                EndDate: new Date('07/24/1969 04:51:00 PM')
            },
        ]
    }
  ];

export let virtualData: Object[] = [];
let x: number = 0;
for (let i: number = 0; i < 50; i++) {
    let parent: Object = {};
    parent["TaskID"] = ++x;
    parent["TaskName"] = "Task " + x;
    parent["StartDate"] = new Date("01/09/2017");
    parent["EndDate"] = new Date("01/13/2017");
    parent["Duration"] = 5;
    parent["Status"] = Math.round(Math.random() * 100);
    let d: Object[] = [];
    for (let j: number = 1; j < 3; j++) {
        let child: Object = {};
        child["TaskID"] = ++x;
        child["TaskName"] = "Task " + x;
        child["StartDate"] = new Date("01/09/2017");
        child["EndDate"] = new Date("01/13/2017");
        child["Duration"] = 5;
        child["Status"] = Math.round(Math.random() * 100);
        let y: Object[] = [];
        for (let k: number = 1; k < 4; k++) {
            let c: Object  = {};
            c["TaskID"] = ++x;
            c["TaskName"] = "Task " + x;
            c["StartDate"] = new Date("01/09/2017");
            c["EndDate"] = new Date("01/13/2017");
            c["Duration"] = 5;
            c["Status"] = Math.round(Math.random() * 100);
            c["Predecessor"] = x - 1;
            y.push(c);
        }
        child["subtasks"] = y;
        d.push(child);
    }
    parent["subtasks"] = d;
    virtualData[i] = parent;
};

export let selfReference: Object[] = [
    {
        'TaskID': 1, 'TaskName': 'Parent Task 1', 'StartDate': new Date('02/27/2017'),
        'EndDate': new Date('03/03/2017'), 'Progress': '40'
    },
    {
        'TaskID': 2, 'TaskName': 'Child Task 1', 'StartDate': new Date('02/27/2017'),
        'EndDate': new Date('03/03/2017'), 'Progress': '40', 'parentID': 1
    },
    {
        'TaskID': 3, 'TaskName': 'Child Task 2', 'StartDate': new Date('02/27/2017'),
        'EndDate': new Date('03/03/2017'), 'Progress': '40', 'parentID': 1
    },
    {
        'TaskID': 4, 'TaskName': 'Child Task 3', 'StartDate': new Date('02/27/2017'),
        'EndDate': new Date('03/03/2017'), 'Duration': 5, 'Progress': '40', 'parentID': 1
    },
    {
        'TaskID': 5, 'TaskName': 'Parent Task 2', 'StartDate': new Date('03/14/2017'),
        'EndDate': new Date('03/18/2017'), 'Progress': '40'
    },
    {
        'TaskID': 6, 'TaskName': 'Child Task 1', 'StartDate': new Date('03/06/2017'),
        'EndDate': new Date('03/10/2017'), 'Progress': '40', 'parentID': 5
    },
    {
        'TaskID': 7, 'TaskName': 'Child Task 2', 'StartDate': new Date('03/06/2017'),
        'EndDate': new Date('03/10/2017'), 'Progress': '40', 'parentID': 5
    },
    {
        'TaskID': 8, 'TaskName': 'Child Task 3', 'StartDate': new Date('03/06/2017'),
        'EndDate': new Date('03/10/2017'), 'Progress': '40', 'parentID': 5
    },
    {
        'TaskID': 9, 'TaskName': 'Child Task 4', 'StartDate': new Date('03/06/2017'),
        'EndDate': new Date('03/10/2017'), 'Progress': '40', 'parentID': 5
    },
    {
        'TaskID': 10, 'TaskName': 'Parent Task 3', 'StartDate': new Date('03/13/2017'),
        'EndDate': new Date('03/17/2017'), 'Progress': '40'
    },
    {
        'TaskID': 11, 'TaskName': 'Child Task 1', 'StartDate': new Date('03/13/2017'),
        'EndDate': new Date('03/17/2017'), 'Progress': '40', 'parentID': 10
    },
    {
        'TaskID': 12, 'TaskName': 'Child Task 2', 'StartDate': new Date('03/13/2017'),
        'EndDate': new Date('03/17/2017'), 'Progress': '40', 'parentID': 10
    },
    {
        'TaskID': 13, 'TaskName': 'Child Task 3', 'StartDate': new Date('03/13/2017'),
        'EndDate': new Date('03/17/2017'), 'Progress': '40', 'parentID': 10
    },
    {
        'TaskID': 14, 'TaskName': 'Child Task 4', 'StartDate': new Date('03/13/2017'),
        'EndDate': new Date('03/17/2017'), 'Progress': '40', 'parentID': 10
    },
    {
        'TaskID': 15, 'TaskName': 'Child Task 5', 'StartDate': new Date('03/13/2017'),
        'EndDate': new Date('03/17/2017'), 'Progress': '40', 'parentID': 10
    }

];

export let indentOutdentData: object[] = [
    {
        TaskID: 1,
        TaskName: 'Product Concept',
        StartDate: new Date('04/02/2019'),
        EndDate: new Date('04/21/2019'),
        subtasks: [
            { TaskID: 2, TaskName: 'Defining the product and its usage', StartDate: new Date('04/02/2019'), Duration: 3,Progress: 30 },
            { TaskID: 3, TaskName: 'Defining target audience', StartDate: new Date('04/02/2019'), Duration: 3 },
            { TaskID: 4, TaskName: 'Prepare product sketch and notes', StartDate: new Date('04/02/2019'), Duration: 3, Predecessor: "2" ,Progress: 30},
        ]
    },
    { TaskID: 5, TaskName: 'Concept Approval', StartDate: new Date('04/02/2019'), Duration: 0, Predecessor: "3,4" },
    {
        TaskID: 6,
        TaskName: 'Market Research',
        StartDate: new Date('04/02/2019'),
        EndDate: new Date('04/21/2019'),
        subtasks: [
            {
                TaskID: 7,
                TaskName: 'Demand Analysis',
                StartDate: new Date('04/04/2019'),
                EndDate: new Date('04/21/2019'),
                subtasks: [
                    { TaskID: 8, TaskName: 'Customer strength', StartDate: new Date('04/04/2019'), Duration: 4, Predecessor: "5",Progress: 30 },
                    { TaskID: 9, TaskName: 'Market opportunity analysis', StartDate: new Date('04/04/2019'), Duration: 4, Predecessor: "5" }
                ]
            },
            { TaskID: 10, TaskName: 'Competitor Analysis', StartDate: new Date('04/04/2019'), Duration: 4, Predecessor: "7,8" ,Progress: 30},
            { TaskID: 11, TaskName: 'Product strength analysis', StartDate: new Date('04/04/2019'), Duration: 4, Predecessor: "9" },
            { TaskID: 12, TaskName: 'Research complete', StartDate: new Date('04/04/2019'), Duration: 0, Predecessor: "10" }
        ]
    }
];

export let projectData: Object[] = [
    {
        TaskID: 1,
        TaskName: 'Project Schedule',
        StartDate: new Date('02/06/2017'),
        EndDate: new Date('03/13/2017'),
        subtasks: [
            {
                TaskID: 2,
                TaskName: 'Planning',
                StartDate: new Date('02/06/2017'),
                EndDate: new Date('02/10/2017'),
                subtasks: [
                    {
                        TaskID: 3, TaskName: 'Plan timeline', StartDate: null, EndDate: new Date('02/10/2017'),
                        Duration: 7200, DurationUnit: 'min', Progress: '100', ResourceId: [1]
                    },
                    {
                        TaskID: 4, TaskName: 'Plan budget', StartDate: new Date('02/04/2017 05:00:00 AM'), EndDate: new Date('02/10/2017'),
                        Duration: 120, DurationUnit: 'hour', Progress: '100', ResourceId: [1]
                    },
                    {
                        TaskID: 5, TaskName: 'Allocate resources', StartDate: new Date('02/06/2017'), EndDate: new Date('02/13/2017'),
                        Duration: 5, Progress: '100', ResourceId: [1], milestone: true
                    },
                    {
                        TaskID: 6, TaskName: 'Planning complete', StartDate: new Date('02/10/2017'), EndDate: new Date('02/10/2017'),
                        Duration: 0, Predecessor: '3FS,4FS,5FS'
                    },
                    {
                        TaskID: 51,
                        TaskName: 'Temp Parent',
                        StartDate: new Date('02/10/2017'),
                        EndDate: new Date('02/12/2017'),
                        subtasks: [
                            {
                                TaskID: 52, TaskName: 'Temp child', StartDate: null, EndDate: new Date('02/10/2017'),
                                Duration: 3, DurationUnit: 'day', Progress: '100', ResourceId: [1]
                            }
                        ]
                    }
                ]
                
            },
            {
                TaskID: 7,
                TaskName: 'Design',
                StartDate: new Date('02/13/2017'),
                EndDate: new Date('02/17/2017'),
                subtasks: [
                    {
                        TaskID: 8, TaskName: 'Software Specification', StartDate: new Date('02/13/2017'),
                        EndDate: new Date('02/15/2017 18:00:00 PM'),
                        Duration: 3, Progress: '60', Predecessor: '6FS', ResourceId: [2]
                    },
                    {
                        TaskID: 9, TaskName: 'Develop prototype', StartDate: new Date('02/13/2017'), EndDate: new Date('02/15/2017'),
                        Duration: '3 days', Progress: '100', Predecessor: '6FS', ResourceId: [3]
                    },
                    {
                        TaskID: 10, TaskName: 'Get approval from customer', StartDate: new Date('02/16/2017'), milestone: true,
                        EndDate: new Date('02/17/2017'), Duration: 2, Progress: '100', Predecessor: '9FS', ResourceId: [1]
                    },
                    {
                        TaskID: 11, TaskName: 'Design complete', StartDate: new Date('02/17/2017'),
                        EndDate: new Date('02/17/2017'), Duration: 0, Predecessor: '10FS'
                    }
                ]
            },
            {
                TaskID: 12,
                TaskName: 'Implementation Phase',
                StartDate: new Date('02/23/2017'),
                EndDate: new Date('03/03/2017'),
                Expand: false,
                subtasks: [
                    {
                        TaskID: 13,
                        TaskName: 'Phase 1',
                        StartDate: new Date('02/23/2017'),
                        EndDate: new Date('03/05/2017'),
                        subtasks: [{
                            TaskID: 14,
                            TaskName: 'Implementation Module 1',
                            StartDate: new Date('02/23/2017'),
                            EndDate: new Date('03/05/2017'),
                            subtasks: [
                                {
                                    TaskID: 15, TaskName: 'Development Task 1', StartDate: new Date('02/20/2017'),
                                    EndDate: new Date('02/22/2017'), Duration: 3, Progress: '50', Predecessor: '11FS', ResourceId: [3]
                                },
                                {
                                    TaskID: 16, TaskName: 'Development Task 2', StartDate: new Date('02/20/2017'),
                                    EndDate: new Date('02/22/2017'), Duration: 3, Progress: '50', Predecessor: '11FS', ResourceId: [3]
                                },
                                {
                                    TaskID: 17, TaskName: 'Testing', StartDate: new Date('02/23/2017'),
                                    EndDate: new Date('02/24/2017'), Duration: 2, Progress: '0', Predecessor: '15FS,16FS', ResourceId: [4]
                                },
                                {
                                    TaskID: 18, TaskName: 'Bug fix', StartDate: new Date('02/27/2017'),
                                    EndDate: new Date('02/28/2017'), Duration: 2, Progress: '0', Predecessor: '17FS', ResourceId: [3]
                                },
                                {
                                    TaskID: 19, TaskName: 'Customer review meeting', StartDate: new Date('03/01/2017'),
                                    EndDate: new Date('03/05/2017'), Duration: 2, Progress: '0', Predecessor: '18FS', ResourceId: [1]
                                },
                                {
                                    TaskID: 20, TaskName: 'Phase 1 complete', StartDate: new Date('03/05/2017'),
                                    EndDate: new Date('03/05/2017'), Duration: 0, Predecessor: '19FS'
                                }

                            ]
                        }]
                    },

                    {
                        TaskID: 21,
                        TaskName: 'Phase 2',
                        StartDate: new Date('02/23/2017'),
                        EndDate: new Date('03/03/2017'),
                        subtasks: [{
                            TaskID: 22,
                            TaskName: 'Implementation Module 2',
                            StartDate: new Date('02/23/2017'),
                            EndDate: new Date('03/03/2017'),
                            subtasks: [
                                {
                                    TaskID: 23, TaskName: 'Development Task 1', StartDate: new Date('02/20/2017'),
                                    EndDate: new Date('02/23/2017'), Duration: 4, Progress: '50', ResourceId: [3]
                                },
                                {
                                    TaskID: 24, TaskName: 'Development Task 2', StartDate: new Date('02/20/2017'),
                                    EndDate: new Date('02/23/2017'), Duration: 4, Progress: '50', ResourceId: [3]
                                },
                                {
                                    TaskID: 25, TaskName: 'Testing', StartDate: new Date('02/24/2017'),
                                    EndDate: new Date('02/27/2017'), Duration: 2, Progress: '0', Predecessor: '23FS,24FS', ResourceId: [4]
                                },
                                {
                                    TaskID: 26, TaskName: 'Bug fix', StartDate: new Date('02/28/2017'),
                                    EndDate: new Date('03/01/2017'), Duration: 2, Progress: '0', Predecessor: '25FS', ResourceId: [3]
                                },
                                {
                                    TaskID: 27, TaskName: 'Customer review meeting', StartDate: new Date('03/05/2017'),
                                    EndDate: new Date('03/03/2017'), Duration: 2, Progress: '0', Predecessor: '26FS', ResourceId: [1]
                                },
                                {
                                    TaskID: 28, TaskName: 'Phase 2 complete', StartDate: new Date('03/03/2017'),
                                    EndDate: new Date('03/03/2017'), Duration: 0, Predecessor: '27FS'
                                }

                            ]
                        }]
                    },

                    {
                        TaskID: 29,
                        TaskName: 'Phase 3',
                        StartDate: new Date('02/23/2017'),
                        EndDate: new Date('03/05/2017'),
                        subtasks: [{
                            TaskID: 30,
                            TaskName: 'Implementation Module 3',
                            StartDate: new Date('02/23/2017'),
                            EndDate: new Date('03/05/2017'),
                            subtasks: [
                                {
                                    TaskID: 31, TaskName: 'Development Task 1', StartDate: new Date('02/20/2017'),
                                    EndDate: new Date('02/22/2017'), Duration: 3, Progress: '50', ResourceId: [3]
                                },
                                {
                                    TaskID: 32, TaskName: 'Development Task 2', StartDate: new Date('02/20/2017'),
                                    EndDate: new Date('02/22/2017'), Duration: 3, Progress: '50', ResourceId: [3]
                                },
                                {
                                    TaskID: 33, TaskName: 'Testing', StartDate: new Date('02/23/2017'),
                                    EndDate: new Date('02/24/2017'), Duration: 2, Progress: '0', Predecessor: '31FS,32FS', ResourceId: [4]
                                },
                                {
                                    TaskID: 34, TaskName: 'Bug fix', StartDate: new Date('02/27/2017'),
                                    EndDate: new Date('03/03/2017'), Duration: 2, Progress: '0', Predecessor: '33FS', ResourceId: [3]
                                },
                                {
                                    TaskID: 35, TaskName: 'Customer review meeting', StartDate: new Date('03/01/2017'),
                                    EndDate: new Date('03/02/2017'), Duration: 2, Progress: '0', Predecessor: '34FS', ResourceId: [1]
                                },
                                {
                                    TaskID: 36, TaskName: 'Phase 3 complete', StartDate: new Date('03/02/2017'),
                                    EndDate: new Date('03/02/2017'), Duration: 0, Predecessor: '35FS'
                                },

                            ]
                        }]
                    }
                ]
            },
            {
                TaskID: 37, TaskName: 'Integration', StartDate: new Date('03/06/2017'),
                EndDate: new Date('03/08/2017'), Duration: 3, Progress: '0', Predecessor: '20FS,28FS,36FS', ResourceId: [3]
            },
            {
                TaskID: 38, TaskName: 'Final Testing', StartDate: new Date('03/09/2017'),
                EndDate: new Date('03/10/2017'), Duration: 2, Progress: '0', Predecessor: '37FS', ResourceId: [4]
            },
            {
                TaskID: 39, TaskName: 'Final Delivery', StartDate: new Date('03/10/2017'),
                EndDate: new Date('03/10/2017'), Duration: 0, Predecessor: '38FS'
            }
        ]
    }
];

export let zoomingData: object[] = [ {
    TaskID: 1,
    TaskName: 'Project Initiation',
    StartDate: new Date('04/02/2019'),
    EndDate: new Date('04/21/2019'),
    subtasks: [
        { TaskID: 2, TaskName: 'Identify Site location', BaselineStartDate: new Date('07/08/2019'),  BaselineEndDate: new Date('09/14/2019'), StartDate: new Date('04/08/2019'), Duration: 100, Progress: 50 },
        { TaskID: 3, TaskName: 'Perform Soil test', BaselineStartDate: new Date('03/04/2019'),Predecessor:'2FS', BaselineEndDate: new Date('04/19/2019'), StartDate: new Date('04/08/2019'), Duration: 100, Progress: 50 },
        { TaskID: 4, TaskName: 'Soil test approval', BaselineStartDate: new Date('03/09/2019'), Predecessor:'3SF', BaselineEndDate: new Date('04/21/2019'), StartDate: new Date('04/12/2019'), Duration: 10, Progress: 50 },
    ]
},];
export let exportData: Object[] = [
    {
        TaskID: 1,
        TaskName: 'Product Concept',
        StartDate: new Date('04/02/2019'),
        EndDate: new Date('04/21/2019'),
        subtasks: [
            { TaskID: 2, Bs: new Date('04/02/2019'),Be: new Date('04/08/2019'), TaskName: 'Defining the product and its usage', StartDate: new Date('04/02/2019'), Duration: 33, Progress: 30 },
            { TaskID: 3, TaskName: 'Defining target audience', StartDate: new Date('04/02/2019'), Duration: 0 },
            { TaskID: 4, TaskName: 'Prepare product sketch and notes', StartDate: new Date('04/02/2019'), Predecessor:'322SS', Duration: 3, Progress: 30 },
        ]
    },
    { TaskID: 5, TaskName: 'Concept Approval', StartDate: new Date('04/02/2019'), Duration: 0, Predecessor: "3222255FS + 2days" },
    {
        TaskID: 6,
        TaskName: 'Market Research',
        StartDate: new Date('04/02/2019'),
        EndDate: new Date('04/21/2019'),
        subtasks: [
            {
                TaskID: 7,
                TaskName: 'Demand Analysis',
                StartDate: new Date('04/04/2019'),
                EndDate: new Date('04/21/2019'),
                subtasks: [
                    { TaskID: 8, TaskName: 'Customer strength', StartDate: new Date('04/04/2019'), Duration: 4, Predecessor: "55555", Progress: 30 },
                    { TaskID: 9, TaskName: 'Market opportunity analysis', StartDate: new Date('04/04/2019'), Duration: 4, Predecessor: "55555" }
                ]
            },
            { TaskID: 10, TaskName: 'Competitor Analysis', StartDate: new Date('04/04/2019'), Duration: 4, Predecessor: "", Progress: 30 },
            { TaskID: 11, TaskName: 'Product strength analysis', StartDate: new Date('04/04/2019'), Duration: 4, Predecessor: "" },
            { TaskID: 12, TaskName: 'Research complete', StartDate: new Date('04/04/2019'), Duration: 1, Predecessor: "" }
        ]
    },
    {
        TaskID: 13,
        TaskName: 'Product Design and Development',
        StartDate: new Date('04/04/2019'),
        EndDate: new Date('04/21/2019'),
        subtasks: [
            { TaskID: 14, TaskName: 'Functionality design', StartDate: new Date('04/04/2019'), Duration: 7, Progress: 30 },
            { TaskID: 15, TaskName: 'Quality design', StartDate: new Date('04/04/2019'), Predecessor:'14SF', Duration: 5 },
            { TaskID: 16, TaskName: 'Define Reliability', StartDate: new Date('04/04/2019'), Duration: 5,Predecessor:'', Progress: 30 },
            { TaskID: 17, TaskName: 'Identifying raw materials ', StartDate: new Date('04/04/2019'), Duration: 4 },
            {
                TaskID: 18,
                TaskName: 'Define cost plan',
                StartDate: new Date('04/04/2019'),
                EndDate: new Date('04/21/2019'),
                subtasks: [
                    { TaskID: 19, TaskName: 'Manufacturing cost', StartDate: new Date('04/04/2019'), Duration: 1,Predecessor:'1766FF', Progress: 30 },
                    { TaskID: 20, TaskName: 'Selling cost', StartDate: new Date('04/04/2019'),Predecessor:'1966SS', Duration: 1 }
                ]
            },
            {
                TaskID: 21,
                TaskName: 'Development of the final design',
                StartDate: new Date('04/04/2019'),
                EndDate: new Date('04/21/2019'),
                subtasks: [
                    { TaskID: 22, TaskName: 'Defining dimensions and package volume', StartDate: new Date('04/04/2019'), Duration: 2, Progress: 30 },
                    { TaskID: 23, TaskName: 'Develop design to meet industry standards', StartDate: new Date('04/04/2019'), Duration: 3 },
                    { TaskID: 24, TaskName: 'Include all the details', StartDate: new Date('04/04/2019'), Duration: 5 }
                ]
            },
            { TaskID: 25, TaskName: 'CAD Computer-aided design', StartDate: new Date('04/04/2019'), Duration: 10, Progress: 30 },
            { TaskID: 26, TaskName: 'CAM Computer-aided manufacturing', StartDate: new Date('04/04/2019'), Duration: 10 }
        ]
    },
    { TaskID: 27, TaskName: 'Prototype Testing', StartDate: new Date('04/04/2019'), Duration: 12, Progress: 30 },
    { TaskID: 28, TaskName: 'Include feedback', StartDate: new Date('04/04/2019'), Duration: 5 },
    { TaskID: 29, TaskName: 'Manufacturing', StartDate: new Date('04/04/2019'), Duration: 9, Progress: 30 },
    { TaskID: 30, TaskName: 'Assembling materials to finished goods', StartDate: new Date('04/04/2019'), Duration: 12 },
    {
        TaskID: 31,
        TaskName: 'Feedback and Testing',
        StartDate: new Date('04/04/2019'),
        EndDate: new Date('04/21/2019'),
        subtasks: [
            { TaskID: 32, TaskName: 'Internal testing and feedback', StartDate: new Date('04/04/2019'), Duration: 5, Progress: 30 },
            { TaskID: 33, TaskName: 'Customer testing and feedback', StartDate: new Date('04/04/2019'), Duration: 7, Progress: 30 }
        ]
    },
    {
        TaskID: 34,
        TaskName: 'Product Development',
        StartDate: new Date('04/04/2019'),
        EndDate: new Date('04/21/2019'),
        subtasks: [
            { TaskID: 35, dd:'dd', TaskName: 'Important improvements', StartDate: new Date('04/04/2019'), Duration: 2, Progress: 30 },
            { TaskID: 36, TaskName: 'Address any unforeseen issues', StartDate: new Date('04/04/2019'), Duration: 2, Progress: 30 }
        ]
    },
    {
        TaskID: 37,
        TaskName: 'Final Product',
        StartDate: new Date('04/04/2019'),
        EndDate: new Date('04/21/2019'),
        subtasks: [
            { TaskID: 38, TaskName: 'Branding product', StartDate: new Date('04/04/2019'), Duration: 5, Predecessor: '55555FF' },
            { TaskID: 39, TaskName: 'Marketing and pre-sales', StartDate: new Date('04/04/2019'), Duration: 10, Progress: 30 }
        ]
    }
];


export let projectData1: Object[] = [
    {
        TaskID: 1,
        TaskName: 'Project Schedule',
        StartDate: new Date('02/06/2017'),
        EndDate: new Date('03/13/2017'),
        subtasks: [
            {
                TaskID: 2,
                TaskName: 'Planning',
                StartDate: new Date('02/06/2017'),
                EndDate: new Date('02/10/2017'),
                subtasks: [
                    {
                        TaskID: 3, TaskName: 'Plan timeline', StartDate: null, EndDate: new Date('02/10/2017'),
                        Duration: 5, Progress: '100', ResourceId: [1]
                    },
                    {
                        TaskID: 4, TaskName: 'Plan budget', StartDate: new Date('02/04/2017 05:00:00 AM'), EndDate: new Date('02/10/2017'),
                        Duration: 2, Progress: '100', ResourceId: [1]
                    },
                    {
                        TaskID: 5, TaskName: 'Allocate resources', StartDate: new Date('02/06/2017'), EndDate: new Date('02/13/2017'),
                        Duration: 5, Progress: '100', ResourceId: [1], milestone: true
                    },
                    {
                        TaskID: 6, TaskName: 'Planning complete', StartDate: new Date('02/10/2017'), EndDate: new Date('02/10/2017'),
                        Duration: 0, Predecessor: '3FS,4FS,5FS'
                    },
                    {
                        TaskID: 51,
                        TaskName: 'Temp Parent',
                        StartDate: new Date('02/10/2017'),
                        EndDate: new Date('02/12/2017'),
                        subtasks: [
                            {
                                TaskID: 52, TaskName: 'Temp child', StartDate: null, EndDate: new Date('02/10/2017'),
                                Duration: 3, DurationUnit: 'day', Progress: '100', ResourceId: [1]
                            }
                        ]
                    }
                ]
                
            },
            {
                TaskID: 7,
                TaskName: 'Design',
                StartDate: new Date('02/13/2017'),
                EndDate: new Date('02/17/2017'),
                subtasks: [
                    {
                        TaskID: 8, TaskName: 'Software Specification', StartDate: new Date('02/13/2017'),
                        EndDate: new Date('02/15/2017 18:00:00 PM'),
                        Duration: 3, Progress: '60', Predecessor: '6FS', ResourceId: [2]
                    },
                    {
                        TaskID: 9, TaskName: 'Develop prototype', StartDate: new Date('02/13/2017'), EndDate: new Date('02/15/2017'),
                        Duration: '3 days', Progress: '100', Predecessor: '6FS', ResourceId: [3]
                    },
                    {
                        TaskID: 10, TaskName: 'Get approval from customer', StartDate: new Date('02/16/2017'), milestone: true,
                        EndDate: new Date('02/17/2017'), Duration: 2, Progress: '100', Predecessor: '9FS', ResourceId: [1]
                    },
                    {
                        TaskID: 11, TaskName: 'Design complete', StartDate: new Date('02/17/2017'),
                        EndDate: new Date('02/17/2017'), Duration: 0, Predecessor: '10FS'
                    }
                ]
            },
            {
                TaskID: 12,
                TaskName: 'Implementation Phase',
                StartDate: new Date('02/23/2017'),
                EndDate: new Date('03/03/2017'),
                Expand: false,
                subtasks: [
                    {
                        TaskID: 13,
                        TaskName: 'Phase 1',
                        StartDate: new Date('02/23/2017'),
                        EndDate: new Date('03/05/2017'),
                        subtasks: [{
                            TaskID: 14,
                            TaskName: 'Implementation Module 1',
                            StartDate: new Date('02/23/2017'),
                            EndDate: new Date('03/05/2017'),
                            subtasks: [
                                {
                                    TaskID: 15, TaskName: 'Development Task 1', StartDate: new Date('02/20/2017'),
                                    EndDate: new Date('02/22/2017'), Duration: 3, Progress: '50', Predecessor: '11FS', ResourceId: [3]
                                },
                                {
                                    TaskID: 16, TaskName: 'Development Task 2', StartDate: new Date('02/20/2017'),
                                    EndDate: new Date('02/22/2017'), Duration: 3, Progress: '50', Predecessor: '11FS', ResourceId: [3]
                                },
                                {
                                    TaskID: 17, TaskName: 'Testing', StartDate: new Date('02/23/2017'),
                                    EndDate: new Date('02/24/2017'), Duration: 2, Progress: '0', Predecessor: '15FS,16FS', ResourceId: [4]
                                },
                                {
                                    TaskID: 18, TaskName: 'Bug fix', StartDate: new Date('02/27/2017'),
                                    EndDate: new Date('02/28/2017'), Duration: 2, Progress: '0', Predecessor: '17FS', ResourceId: [3]
                                },
                                {
                                    TaskID: 19, TaskName: 'Customer review meeting', StartDate: new Date('03/01/2017'),
                                    EndDate: new Date('03/05/2017'), Duration: 2, Progress: '0', Predecessor: '18FS', ResourceId: [1]
                                },
                                {
                                    TaskID: 20, TaskName: 'Phase 1 complete', StartDate: new Date('03/05/2017'),
                                    EndDate: new Date('03/05/2017'), Duration: 0, Predecessor: '19FS'
                                }

                            ]
                        }]
                    },

                    {
                        TaskID: 21,
                        TaskName: 'Phase 2',
                        StartDate: new Date('02/23/2017'),
                        EndDate: new Date('03/03/2017'),
                        subtasks: [{
                            TaskID: 22,
                            TaskName: 'Implementation Module 2',
                            StartDate: new Date('02/23/2017'),
                            EndDate: new Date('03/03/2017'),
                            subtasks: [
                                {
                                    TaskID: 23, TaskName: 'Development Task 1', StartDate: new Date('02/20/2017'),
                                    EndDate: new Date('02/23/2017'), Duration: 4, Progress: '50', ResourceId: [3]
                                },
                                {
                                    TaskID: 24, TaskName: 'Development Task 2', StartDate: new Date('02/20/2017'),
                                    EndDate: new Date('02/23/2017'), Duration: 4, Progress: '50', ResourceId: [3]
                                },
                                {
                                    TaskID: 25, TaskName: 'Testing', StartDate: new Date('02/24/2017'),
                                    EndDate: new Date('02/27/2017'), Duration: 2, Progress: '0', Predecessor: '23FS,24FS', ResourceId: [4]
                                },
                                {
                                    TaskID: 26, TaskName: 'Bug fix', StartDate: new Date('02/28/2017'),
                                    EndDate: new Date('03/01/2017'), Duration: 2, Progress: '0', Predecessor: '25FS', ResourceId: [3]
                                },
                                {
                                    TaskID: 27, TaskName: 'Customer review meeting', StartDate: new Date('03/05/2017'),
                                    EndDate: new Date('03/03/2017'), Duration: 2, Progress: '0', Predecessor: '26FS', ResourceId: [1]
                                },
                                {
                                    TaskID: 28, TaskName: 'Phase 2 complete', StartDate: new Date('03/03/2017'),
                                    EndDate: new Date('03/03/2017'), Duration: 0, Predecessor: '27FS'
                                }

                            ]
                        }]
                    },

                    {
                        TaskID: 29,
                        TaskName: 'Phase 3',
                        StartDate: new Date('02/23/2017'),
                        EndDate: new Date('03/05/2017'),
                        subtasks: [{
                            TaskID: 30,
                            TaskName: 'Implementation Module 3',
                            StartDate: new Date('02/23/2017'),
                            EndDate: new Date('03/05/2017'),
                            subtasks: [
                                {
                                    TaskID: 31, TaskName: 'Development Task 1', StartDate: new Date('02/20/2017'),
                                    EndDate: new Date('02/22/2017'), Duration: 3, Progress: '50', ResourceId: [3]
                                },
                                {
                                    TaskID: 32, TaskName: 'Development Task 2', StartDate: new Date('02/20/2017'),
                                    EndDate: new Date('02/22/2017'), Duration: 3, Progress: '50', ResourceId: [3]
                                },
                                {
                                    TaskID: 33, TaskName: 'Testing', StartDate: new Date('02/23/2017'),
                                    EndDate: new Date('02/24/2017'), Duration: 2, Progress: '0', Predecessor: '31FS,32FS', ResourceId: [4]
                                },
                                {
                                    TaskID: 34, TaskName: 'Bug fix', StartDate: new Date('02/27/2017'),
                                    EndDate: new Date('03/03/2017'), Duration: 2, Progress: '0', Predecessor: '33FS', ResourceId: [3]
                                },
                                {
                                    TaskID: 35, TaskName: 'Customer review meeting', StartDate: new Date('03/01/2017'),
                                    EndDate: new Date('03/02/2017'), Duration: 2, Progress: '0', Predecessor: '34FS', ResourceId: [1]
                                },
                                {
                                    TaskID: 36, TaskName: 'Phase 3 complete', StartDate: new Date('03/02/2017'),
                                    EndDate: new Date('03/02/2017'), Duration: 0, Predecessor: '35FS'
                                },

                            ]
                        }]
                    }
                ]
            },
            {
                TaskID: 37, TaskName: 'Integration', StartDate: new Date('03/06/2017'),
                EndDate: new Date('03/08/2017'), Duration: 3, Progress: '0', Predecessor: '20FS,28FS,36FS', ResourceId: [3]
            },
            {
                TaskID: 38, TaskName: 'Final Testing', StartDate: new Date('03/09/2017'),
                EndDate: new Date('03/10/2017'), Duration: 2, Progress: '0', Predecessor: '37FS', ResourceId: [4]
            },
            {
                TaskID: 39, TaskName: 'Final Delivery'
            }
        ]
    }
];

export let unscheduledData: Object[] = [
    {
        'TaskID': 1,
        'TaskName': 'Parent Task 1',
        'StartDate': new Date('02/27/2017'),
        'EndDate': new Date('03/03/2017'),
        'Progress': '40',
        'BaselineStartDate': '02/27/2017',
        'BaselineEndDate': '03/06/2017',
        'Children': [
            {
                'TaskID': 2, 'TaskName': 'Child Task 2', 'StartDate': new Date('02/27/2017'),
                'Progress': '40', 'isManual': true, Duration: 4
            },
            {
                'TaskID': 3, 'TaskName': 'Child Task 1', 'EndDate': '03/03/2017', 'Progress': '40', Duration: 4, Predecessor: '4SS',
                'BaselineStartDate': new Date('02/25/2017 10:00 AM'), 'BaselineEndDate': new Date('03/06/2017 04:00 PM'),
            },
            {
                'TaskID': 4, 'TaskName': 'Child Task 3', 'StartDate': new Date('02/27/2017'), 'EndDate': new Date('03/09/2017'),
                'Progress': '40', 'BaselineStartDate': new Date('02/25/2017'), 'BaselineEndDate': new Date('03/06/2017'),
            }
        ]
    },
    {
        'TaskID': 5,
        'TaskName': 'Parent Task 2',
        'StartDate': new Date('03/06/2017'),
        'EndDate': new Date('03/10/2017'),
        'Progress': '40',
        'isManual': true,
        'Children': [
            {
                'TaskID': 6, 'TaskName': 'Child Task 1', 'StartDate': '03/06/2017', 'EndDate': new Date('03/06/2017'),
                'Progress': '40', Duration: 0, 'BaselineStartDate': new Date('03/06/2017'), 'BaselineEndDate': new Date('03/10/2017'),
            },
            {
                'TaskID': 7, 'TaskName': 'Child Task 2', 'StartDate': null, 'EndDate': new Date('03/10/2017'), 'Progress': '40', Duration: 4
            },
            {
                'TaskID': 8, 'TaskName': 'Child Task 3', 'StartDate': new Date('03/06/2017'), 'EndDate': null,
                'Progress': '40', 'BaselineStartDate': new Date('03/05/2017 05:00:00 AM'),
                'BaselineEndDate': new Date('03/16/2017 18:00:00 PM'),
            },
            {
                'TaskID': 9, 'TaskName': 'Child Task 4', 'StartDate': new Date('03/06/2017'), 'EndDate': new Date('03/10/2017'),
                'Progress': '40', 'isManual': true, Duration: 0
            }
        ]
    },
    {
        'TaskID': 10,
        'TaskName': 'Parent Task 3',
        'StartDate': new Date('03/13/2017'),
        'EndDate': new Date('03/17/2017'),
        'Progress': '40',
        'Children': [
            {
                'TaskID': 11, 'TaskName': 'Child Task 1', 'StartDate': new Date('03/13/2017'), 'Progress': '40'
            },
            {
                'TaskID': 12, 'TaskName': 'Child Task 2', 'EndDate': '03/17/2017', 'Progress': '40'
            },
            {
                'TaskID': 13, 'TaskName': 'Child Task 3', 'Progress': '40', Duration: 4
            },
            {
                'TaskID': 14, 'TaskName': 'Child Task 4', 'Progress': '40', 'isManual': true, Duration: 0
            },
            {
                'TaskID': 15, 'TaskName': 'Child Task 5', 'Progress': '40',
            }
        ]
    }
];
export let resourceGanttData: Object[] = [
    {
        TaskID: 1,
        TaskName: 'Product Concept',
        StartDate: new Date('04/02/2019'),
        EndDate: new Date('04/21/2019'),
        subtasks: [
            {
                TaskID: 2, TaskName: 'Perform soil test', StartDate: new Date('04/02/2019'), Duration: 4,
                resources: [{ ResourceId: 2, ResourceUnit: 70 }, 3, { ResourceId: 1, ResourceUnit: 70, custom: 'check' }]
            },
            { TaskID: 3, resources: [1, 4], TaskName: 'Defining the product and its usage', StartDate: new Date('04/02/2019'), Duration: 3, Progress: 30 },
            { TaskID: 4, TaskName: 'Defining target audience', StartDate: new Date('04/02/2019'), Duration: 3 },
            { TaskID: 5, TaskName: 'Prepare product sketch and notes', StartDate: new Date('04/02/2019'), Duration: 3, Predecessor: "2", Progress: 30 }
        ]
    }
];
export let unscheduledData2: Object[] = [
    {
        'TaskID': 1,
        'TaskName': 'Parent Task 1',
        'StartDate': new Date('02/27/2017'),
        'BaselineStartDate': '02/27/2017',
        'Progress': '40',
        'Children': [
            {
                'TaskID': 2, 'TaskName': 'Child Task 2', 'StartDate': new Date('02/27/2017'), 'BaselineStartDate': '02/27/2017',
                'Progress': '40', 'isManual': true,
            },
            {
                'TaskID': 3, 'TaskName': 'Child Task 1', 'StartDate': '03/03/2017', 'Progress': '40', Duration: 4, 'BaselineStartDate': '02/25/2017',
            },
            {
                'TaskID': 4, 'TaskName': 'Child Task 3', 'StartDate': new Date('02/27/2017'), 'BaselineStartDate': '02/27/2017',
                'Progress': '40'
            }
        ]
    }
];
export let unscheduledData3: Object[] = [
    {
        'TaskID': 1,
        'TaskName': 'Parent Task 1',
        'EndDate': new Date('02/27/2017'),
        'BaselineEndDate': '02/27/2017',
        'Progress': '40',
        'Children': [
            {
                'TaskID': 2, 'TaskName': 'Child Task 2', 'EndDate': new Date('02/27/2017'), 'BaselineEndDate': '02/27/2017',
                'Progress': '40', 'isManual': true,
            },
            {
                'TaskID': 3, 'TaskName': 'Child Task 1', 'EndDate': '03/03/2017', 'Progress': '40', 'BaselineEndDate': '03/03/2017',
            },
            {
                'TaskID': 4, 'TaskName': 'Child Task 3', 'EndDate': new Date('02/27/2017'), 'BaselineEndDate': '02/27/2017',
                'Progress': '40'
            }
        ]
    }
];
export let unscheduledData4: Object[] = [
    {
        'TaskID': 1,
        'TaskName': 'Parent Task 1',
        'Progress': '40',
        'Children': [
            {
                'TaskID': 2, 'TaskName': 'Child Task 2', 'Progress': '40', 'isManual': true,
            },
            {
                'TaskID': 3, 'TaskName': 'Child Task 1', 'Progress': '40'
            },
            {
                'TaskID': 4, 'TaskName': 'Child Task 3', 'Progress': '40'
            }
        ]
    }
];

export let zoomData: Object[] =[
    {
        'TaskID': 1,
        'TaskName': 'Parent Task 1',
        'StartDate': new Date('02/02/2018'),
        'EndDate': new Date('03/03/2018'),
        'Progress': '40',
        'isManual': true,
        'Children': [
            {
                'TaskID': 2, 'TaskName': 'Child Task 1', 'StartDate': new Date('02/04/2018'), 'EndDate': new Date('02/12/2018'),
                'Progress': '40', 'Duration': '8minutes', 'DurationUnit':'minutes'
            },
            {
                'TaskID': 3, 'TaskName': 'Child Task 2', 'StartDate': new Date('02/04/2018'), 'EndDate': new Date('02/13/2018'),
                'Progress': '40', 'Duration': '8minutes', 'DurationUnit':'minute'
            },
            {
                'TaskID': 4, 'TaskName': 'Child Task 3', 'StartDate': new Date('02/04/2018'), 'EndDate': new Date('02/14/2018'),
                'Progress': '40', 'Duration': '8minutes', 'DurationUnit':'minute'
            }
        ]
    },
]

export let zoomData1: Object[] =[
    {
        'TaskID': 1,
        'TaskName': 'Parent Task 1',
        'StartDate': new Date('02/02/2018'),
        'EndDate': new Date('03/03/2018'),
        'Progress': '40',
        'isManual': true,
        'Children': [
            {
                'TaskID': 2, 'TaskName': 'Child Task 1', 'StartDate': new Date('02/04/2018'), 'EndDate': new Date('02/12/2018'),
                'Progress': '40', 'Duration': 400
            },
            {
                'TaskID': 3, 'TaskName': 'Child Task 2', 'StartDate': new Date('02/04/2018'), 'EndDate': new Date('02/13/2018'),
                'Progress': '40', 'Duration': 4
            },
            {
                'TaskID': 4, 'TaskName': 'Child Task 3', 'StartDate': new Date('02/04/2018'), 'EndDate': new Date('02/14/2018'),
                'Progress': '40', 'Duration': 4
            }
        ]
    },
]
export let timezoneData: Object[] = [
    {
        'TaskID': 1,
        'TaskName': 'Parent Task 1',
        'StartDate': new Date('02/02/2018'),
        'EndDate': new Date('03/03/2018'),
        'Progress': '40',
        'isManual': true,
        'Children': [
            {
                'TaskID': 2, 'TaskName': 'Child Task 1', 'StartDate': new Date('02/07/2018 14:00'), 'EndDate': new Date('02/12/2018'),
                'Progress': '40', 'Duration': 8
            },
            {
                'TaskID': 3, 'TaskName': 'Child Task 2', 'StartDate': new Date('02/05/2018'), 'EndDate': new Date('02/13/2018'),
                'Progress': '40', 'Duration': 8
            },
            {
                'TaskID': 4, 'TaskName': 'Child Task 3', 'StartDate': new Date('02/06/2018'), 'EndDate': new Date('02/14/2018'),
                'Progress': '40', 'Duration': 8
            }
        ]
    },
    {
        'TaskID': 5,
        'TaskName': 'Parent Task 5',
        'StartDate': new Date('02/02/2018'),
        'EndDate': new Date('03/03/2018'),
        'Progress': '40',
        'isManual': true,
        'Children': [
            {
                'TaskID': 6, 'TaskName': 'Child Task 6', 'StartDate': new Date('03/04/2018'), 'EndDate': new Date('03/12/2018'),
                'Progress': '40', 'Duration': 8
            },
            {
                'TaskID': 7, 'TaskName': 'Child Task 7', 'StartDate': new Date('03/05/2018'), 'EndDate': new Date('03/13/2018'),
                'Progress': '40', 'Duration': 8
            },
            {
                'TaskID': 8, 'TaskName': 'Child Task 8', 'StartDate': new Date('03/06/2018'), 'EndDate': new Date('03/14/2018'),
                'Progress': '40', 'Duration': 8
            },
            {
                'TaskID': 9, 'TaskName': 'Child Task 9', 'StartDate': new Date('03/05/2018'), 'EndDate': new Date('03/13/2018'),
                'Progress': '40', 'Duration': 8
            },
            {
                'TaskID': 10, 'TaskName': 'Child Task 10', 'StartDate': new Date('03/06/2018'), 'EndDate': new Date('03/14/2018'),
                'Progress': '40', 'Duration': 8
            }
        ]
    }
];
export let defaultGanttData: Object[] = [
    {
        'TaskID': 1,
        'TaskName': 'Parent Task 1',
        'StartDate': new Date('02/02/2018'),
        'EndDate': new Date('03/03/2018'),
        'Progress': '40',
        'isManual': true,
        'Children': [
            {
                'TaskID': 2, 'TaskName': 'Child Task 1', 'StartDate': new Date('02/04/2018'), 'EndDate': new Date('02/12/2018'),
                'Progress': '40', 'Duration': 8
            },
            {
                'TaskID': 3, 'TaskName': 'Child Task 2', 'StartDate': new Date('02/05/2018'), 'EndDate': new Date('02/13/2018'),
                'Progress': '40', 'Duration': 8
            },
            {
                'TaskID': 4, 'TaskName': 'Child Task 3', 'StartDate': new Date('02/06/2018'), 'EndDate': new Date('02/14/2018'),
                'Progress': '40', 'Duration': 8
            }
        ]
    },
    {
        'TaskID': 5,
        'TaskName': 'Parent Task 5',
        'StartDate': new Date('02/02/2018'),
        'EndDate': new Date('03/03/2018'),
        'Progress': '40',
        'isManual': true,
        'Children': [
            {
                'TaskID': 6, 'TaskName': 'Child Task 6', 'StartDate': new Date('03/04/2018'), 'EndDate': new Date('03/12/2018'),
                'Progress': '40', 'Duration': 8
            },
            {
                'TaskID': 7, 'TaskName': 'Child Task 7', 'StartDate': new Date('03/05/2018'), 'EndDate': new Date('03/13/2018'),
                'Progress': '40', 'Duration': 8
            },
            {
                'TaskID': 8, 'TaskName': 'Child Task 8', 'StartDate': new Date('03/06/2018'), 'EndDate': new Date('03/14/2018'),
                'Progress': '40', 'Duration': 8
            },
            {
                'TaskID': 9, 'TaskName': 'Child Task 9', 'StartDate': new Date('03/05/2018'), 'EndDate': new Date('03/13/2018'),
                'Progress': '40', 'Duration': 8
            },
            {
                'TaskID': 10, 'TaskName': 'Child Task 10', 'StartDate': new Date('03/06/2018'), 'EndDate': new Date('03/14/2018'),
                'Progress': '40', 'Duration': 8
            }
        ]
    }];

export let baselineData: Object[] = [
    {
        'TaskId': 1,
        'TaskName': 'Task 1',
        'StartDate': new Date('10/23/2017'),
        'BaselineStartDate': new Date('10/23/2017'),
        'BaselineEndDate': new Date('10/28/2017'),
        'Duration': 10,
        'Progress': 70,
        'cusClass': 'cusclass',
        'Children': [
            {
                'resourceInfo': [1], 'TaskId': 2, 'TaskName': 'Child task 1', 'cusClass': 'cusclass',
                'StartDate': new Date('10/23/2017'), 'BaselineStartDate': new Date('10/23/2017'),
                'BaselineEndDate': new Date('10/26/2017'), 'Duration': 4, 'Progress': 80
            },
            {
                'resourceInfo': [2, 4], 'TaskId': 3, 'TaskName': 'Child task 2',
                'StartDate': new Date('10/24/2017'), 'BaselineStartDate': new Date('10/24/2017'),
                'BaselineEndDate': new Date('10/24/2017'), 'Duration': 0, 'Progress': 65, 'Predecessor': '2'
            },
            {
                'TaskId': 4,
                'TaskName': 'Child task 3',
                'StartDate': new Date('10/25/2017'),
                'BaselineStartDate': new Date('10/26/2017'),
                'BaselineEndDate': new Date('10/28/2017'),
                'Duration': 6,
                'Progress': 77,
                'Expand': false,
                'Children': [
                    {
                        'resourceInfo': [3], 'TaskId': 5, 'TaskName': 'Grand child task 1',
                        'StartDate': new Date('10/28/2017'), 'BaselineStartDate': new Date('10/27/2017'),
                        'BaselineEndDate': new Date('11/1/2017'), 'Duration': 5, 'Progress': 60
                    },
                    {
                        'TaskId': 6, 'TaskName': 'Grand child task 2', 'Expand': false,
                        'StartDate': new Date('10/29/2017'), 'BaselineStartDate': new Date('10/29/2017'),
                        'BaselineEndDate': new Date('10/31/2017'), 'Duration': 6, 'Progress': 77, 'Predecessor': '5'
                    },
                    {
                        'resourceInfo': [], 'TaskId': 7, 'TaskName': 'Grand child task 3',
                        'StartDate': new Date('10/25/2017'), 'BaselineStartDate': new Date('10/25/2017'),
                        'BaselineEndDate': new Date('10/25/2017'), 'Duration': 0, 'Progress': 0, 'Predecessor': '6'
                    }, {
                        'TaskId': 4,
                        'TaskName': 'Child task 8',
                        'StartDate': new Date('10/25/2017'),
                        'BaselineStartDate': new Date('10/26/2017'),
                        'BaselineEndDate': new Date('10/28/2017'),
                        'Duration': 6,
                        'Progress': 77,
                        'Expand': true,
                        'Children': [
                            {
                                'resourceInfo': [3], 'TaskId': 9, 'TaskName': 'Grand child task 1',
                                'StartDate': new Date('10/28/2017'), 'BaselineStartDate': new Date('10/27/2017'),
                                'BaselineEndDate': new Date('11/1/2017'), 'Duration': 0, 'Progress': 60
                            }]
                    }
                ]
            }
        ]
    }
];

export let resourceData: Object[] = [
    { resourceId: 1, resourceName: 'Robert King' },
    { resourceId: 2, resourceName: 'Anne Dodsworth' },
    { resourceId: 3, resourceName: 'David William' },
    { resourceId: 4, resourceName: 'Nancy Davolio' },
    { resourceId: 5, resourceName: 'Janet Leverling' },
    { resourceId: 6, resourceName: 'Romey_Wilson' }
];

export let sampleData: Object[] = [
    {
        'resourceInfo': [1], 'TaskId': 1, 'TaskName': 'Start-Duration',
        'StartDate': new Date('10/23/2017'), 'BaselineStartDate': new Date('10/23/2017'),
        'BaselineEndDate': new Date('10/26/2017'), 'Duration': 4, 'Progress': 80, 'Notes': 'testing1',
    },
    {
        'resourceInfo': [2], 'TaskId': 2, 'TaskName': 'Start-End',
        'StartDate': new Date('10/24/2017'), 'BaselineStartDate': new Date('10/24/2017'),
        'BaselineEndDate': new Date('10/28/2017'), EndDate: new Date('10/24/2017'), 'Progress': 65, 'Predecessor': '1', 'Notes': 'testing2'
    },
    {
        'resourceInfo': [2], 'TaskId': 3, 'TaskName': 'Duration-End',
        'BaselineStartDate': new Date('10/24/2017'), Duration: '32h',
        'BaselineEndDate': new Date('10/28/2017'), EndDate: new Date('10/24/2017'), 'Progress': 65, 'Predecessor': '1SS','Notes': 'testing3'
    },
    {
        'resourceInfo': [2], 'TaskId': 4, 'TaskName': 'Duration-alone',
        'BaselineStartDate': new Date('10/24/2017'), Duration: '32h',
        'BaselineEndDate': new Date('10/28/2017'), 'Progress': 65, 'Notes': '4'
    },
    {
        'resourceInfo': [2], 'TaskId': 5, 'TaskName': 'StartDate-alone',
        StartDate: new Date('10/24/2017'), 'BaselineStartDate': new Date('10/24/2017'),
        'BaselineEndDate': new Date('10/28/2017'), 'Progress': 65, 'Predecessor': '2', 'Notes': 'testing5'
    },
    {
        'resourceInfo': [2], 'TaskId': 6, 'TaskName': 'EndDate-alone',
        EndDate: new Date('10/28/2017'), 'BaselineStartDate': new Date('10/24/2017'),
        'BaselineEndDate': new Date('10/28/2017'), 'Progress': 65, 'Notes': 'testing6'
    },
    {
        'resourceInfo': [2], 'TaskId': 7, 'TaskName': 'Milestone',
        EndDate: new Date('10/28/2017'), 'BaselineStartDate': new Date('10/24/2017'),
        'BaselineEndDate': new Date('10/28/2017'), 'Progress': 65, Duration: 0, 'Notes': 'testing7'
    },
];

export let cellEditData: object[] = [
    {
        TaskID: 1,
        TaskName: 'Parent Task',
        StartDate: new Date('04/02/2019'),
        EndDate: new Date('04/21/2019'),
        subtasks: [
            { TaskID: 2, TaskName: 'Child Task 1', StartDate: new Date('04/02/2019'), Duration: 3, Progress: 30, Notes: 'Notes 1',
              BaselineStartDate: new Date('04/02/2019'), BaselineEndDate: new Date('04/07/2019'), EstimatedWork: 40.45 }, 
            { TaskID: 3, TaskName: 'Child Task 2', StartDate: new Date('04/02/2019'), Duration: 3, Progress: 30, Notes: 'Notes 2',
            BaselineStartDate: new Date('04/02/2019'), BaselineEndDate: new Date('04/07/2019'), Resource: [3, 1], EstimatedWork: 20 },
            { TaskID: 4, TaskName: 'Milestone Task', StartDate: new Date('04/02/2019'), Duration: 0, Predecessor: "2", Notes: 'Notes 3',
            BaselineStartDate: new Date('04/02/2019'), BaselineEndDate: new Date('04/07/2019'), Resource: [4], EstimatedWork: 80  },
        ]
    },
    { TaskID: 5, TaskName: 'Unscheduled Start Task', StartDate: new Date('04/02/2019'), Notes: 'Notes 4',
    BaselineStartDate: new Date('04/02/2019'), BaselineEndDate: new Date('04/07/2019'), Resource: [3]  },
    { TaskID: 6, TaskName: 'Unscheduled End Task', EndDate: new Date('04/02/2019'), Notes: 'Notes 5',
    BaselineStartDate: new Date('04/02/2019'), BaselineEndDate: new Date('04/07/2019'), EstimatedWork: 55  },
    { TaskID: 7, TaskName: 'Unscheduled Duration Task', Duration: 5, Notes: 'Notes 6',
    BaselineStartDate: new Date('04/02/2019'), BaselineEndDate: new Date('04/07/2019'), Resource: [2]  },
];

export let dialogEditData: object[] = [
    {
        TaskID: 1,
        TaskName: 'Parent Task',
        StartDate: new Date('04/02/2019'),
        EndDate: new Date('04/21/2019'),
        subtasks: [
            { TaskID: 2, TaskName: 'Child Task 1', StartDate: new Date('04/02/2019'), Duration: 3, Progress: 30, Notes: 'Notes 1',
              BaselineStartDate: new Date('04/02/2019'), BaselineEndDate: new Date('04/07/2019'), EstimatedWork: 40 }, 
            { TaskID: 3, TaskName: 'Child Task 2', StartDate: new Date('04/02/2019'), Duration: 3, Progress: 30, Notes: 'Notes 2',
            BaselineStartDate: new Date('04/02/2019'), BaselineEndDate: new Date('04/07/2019'), Resource: [3, 1], EstimatedWork: 20 },
            { TaskID: 4, TaskName: 'Milestone Task', StartDate: new Date('04/02/2019'), Duration: 0, Predecessor: "2", Notes: 'Notes 3',
            BaselineStartDate: new Date('04/02/2019'), BaselineEndDate: new Date('04/07/2019'), Resource: [4], EstimatedWork: 80  },
        ]
    },
    { TaskID: 5, TaskName: 'Unscheduled Start Task', StartDate: new Date('04/02/2019'), Notes: 'Notes 4',
    BaselineStartDate: new Date('04/02/2019'), BaselineEndDate: new Date('04/07/2019'), Resource: [3]  },
    { TaskID: 6, TaskName: 'Unscheduled End Task', EndDate: new Date('04/02/2019'), Notes: 'Notes 5',
    BaselineStartDate: new Date('04/02/2019'), BaselineEndDate: new Date('04/07/2019') , EstimatedWork: 55 },
    { TaskID: 7, TaskName: 'Unscheduled Duration Task', Duration: 5, Notes: 'Notes 6',
    BaselineStartDate: new Date('04/02/2019'), BaselineEndDate: new Date('04/07/2019'), Resource: [2]  },
];

export let resourcesData: Object[] = [
    { resourceId: 1, resourceName: 'Resource 1' },
    { resourceId: 2, resourceName: 'Resource 2' },
    { resourceId: 3, resourceName: 'Resource 3' },
    { resourceId: 4, resourceName: 'Resource 4' },
];

export let resources: Object[] = [
    { resourceId: 1, resourceName: 'Resource 1' },
    { resourceId: 2, resourceName: 'Resource 2', resourceUnit: 80 },
    { resourceId: 3, resourceName: 'Resource 3', resourceUnit: 40 },
    { resourceId: 4, resourceName: 'Resource 4' },
];

export let scheduleModeData: Object[] = [
    {
        "TaskID": 1,
        "TaskName": "Parent Task 1",
        "StartDate": new Date("02/27/2017"),
        "EndDate": new Date("03/03/2017"),
        "Progress": "40",
        "isManual" : true,
        resources: [1],
        "Children": [
             { "TaskID": 2, resources: [2,3],"TaskName": "Child Task 1", "StartDate": new Date("02/27/2017"), "EndDate": new Date("03/03/2017"), "Progress": "40" },
             { "TaskID": 3, "TaskName": "Child Task 2", "StartDate": new Date("02/26/2017"), "EndDate": new Date("03/03/2017"), "Progress": "40","isManual": true },
             { "TaskID": 4, "TaskName": "Child Task 3", "StartDate": new Date("02/27/2017"), "EndDate": new Date("03/03/2017"), "Duration": 5, "Progress": "40", }
        ]
    },
    {
        "TaskID": 5,
        "TaskName": "Parent Task 2",
        "StartDate": new Date("03/05/2017"),
        "EndDate": new Date("03/09/2017"),
        "Progress": "40",
        "isManual": true,
        "Children": [
             { "TaskID": 6, "TaskName": "Child Task 1", "StartDate": new Date("03/06/2017"), "EndDate": new Date("03/09/2017"), "Progress": "40" },
             { "TaskID": 7, "TaskName": "Child Task 2", "StartDate": new Date("03/06/2017"), "EndDate": new Date("03/09/2017"), "Progress": "40", },
             { "TaskID": 8, "TaskName": "Child Task 3", "StartDate": new Date("02/28/2017"), "EndDate": new Date("03/05/2017"), "Progress": "40","isManual":true },
             { "TaskID": 9, "TaskName": "Child Task 4", "StartDate": new Date("03/04/2017"), "EndDate": new Date("03/09/2017"), "Progress": "40","isManual":true }
        ]
    },
    {
        "TaskID": 10,
        "TaskName": "Parent Task 3",
        "StartDate": new Date("03/13/2017"),
        "EndDate": new Date("03/17/2017"),
        "Progress": "40",
        "Children": [
             { "TaskID": 11, "TaskName": "Child Task 1", "StartDate": new Date("03/13/2017"), "EndDate": new Date("03/17/2017"), "Progress": "40" },
             { "TaskID": 12, "TaskName": "Child Task 2", "StartDate": new Date("03/13/2017"), "EndDate": new Date("03/17/2017"), "Progress": "40", },
             { "TaskID": 13, "TaskName": "Child Task 3", "StartDate": new Date("03/13/2017"), "EndDate": new Date("03/17/2017"), "Progress": "40", },
             { "TaskID": 14, "TaskName": "Child Task 4", "StartDate": new Date("03/12/2017"), "EndDate": new Date("03/17/2017"), "Progress": "40","isManual":true },
             { "TaskID": 15, "TaskName": "Child Task 5", "StartDate": new Date("03/13/2017"), "EndDate": new Date("03/17/2017"), "Progress": "40", }
        ]
    }
];
export let resourceDataTaskType: object[] = [
    {
        TaskID: 1,
        TaskName: 'Project initiation',
        StartDate: new Date('03/29/2019'),
        EndDate: new Date('04/21/2019'),
        subtasks: [
            {
                TaskID: 2, TaskName: 'Identify site location', StartDate: new Date('03/29/2019'), Duration: 2,
                Progress: 30, work: 16, resources: [{ resourceId: 1, unit: 70 }, 6]
            },
            {
                TaskID: 3, TaskName: 'Perform soil test', StartDate: new Date('03/29/2019'), Duration: 4,
                resources: [2, 3, 5], work: 96, type: 'FixedDuration'
            },
            {
                TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('03/29/2019'), Duration: 1,
                work: 16, resources: [8, { resourceId: 9, unit: 50 }], Progress: 30
            },
        ]
    },
    {
        TaskID: 5,
        TaskName: 'Project estimation', StartDate: new Date('03/29/2019'), EndDate: new Date('04/21/2019'),
        subtasks: [
            {
                TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('03/29/2019'),
                Duration: 3, Progress: 30, resources: [{ resourceId: 4, unit: 50 }], work: 30
            },
            {
                TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/01/2019'), Duration: 3,
                work: 48, resources: [4, 8], type: 'FixedUnit'
            },
            {
                TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/01/2019'),
                Duration: 2, work: 60, resources: [12, { resourceId: 5, unit: 70 }]
            }
        ]
    },
    {
        TaskID: 9, TaskName: 'Sign contract', StartDate: new Date('04/01/2019'), Duration: 1,
        Progress: 30, resources: [12], work: 24
    }
];
export let resourceResources: object[] = [
    { resourceId: 1, resourceName: 'Martin Tamer' },
    { resourceId: 2, resourceName: 'Rose Fuller' },
    { resourceId: 3, resourceName: 'Margaret Buchanan' },
    { resourceId: 4, resourceName: 'Fuller King' },
    { resourceId: 5, resourceName: 'Davolio Fuller' },
    { resourceId: 6, resourceName: 'Van Jack' },
    { resourceId: 7, resourceName: 'Fuller Buchanan' },
    { resourceId: 8, resourceName: 'Jack Davolio' },
    { resourceId: 9, resourceName: 'Tamer Vinet' },
    { resourceId: 10, resourceName: 'Vinet Fuller' },
    { resourceId: 11, resourceName: 'Bergs Anton' },
    { resourceId: 12, resourceName: 'Construction Supervisor' }
];
export let taskTypeData: Object[] = [
    {
        TaskID: 1,
        TaskName: 'Product Concept',
        StartDate: new Date('04/02/2019'),
        EndDate: new Date('04/21/2019'),
        subtasks: [
            { TaskID: 2, TaskName: 'Defining the product and its usage', StartDate: new Date('04/02/2019'), Duration: 3,Progress: 30, },
            { TaskID: 3, TaskName: 'Defining target audience', StartDate: new Date('04/02/2019'), Duration: 3, taskType: 'FixedDuration' },
            { TaskID: 4, TaskName: 'Prepare product sketch and notes', StartDate: new Date('04/02/2019'), Duration: 3, Predecessor: "2" ,Progress: 30},
        ]
    },
    { TaskID: 5, TaskName: 'Concept Approval', StartDate: new Date('04/02/2019'), Duration: 0, Predecessor: "3,4" },
    {
        TaskID: 6,
        TaskName: 'Market Research',
        StartDate: new Date('04/02/2019'),
        EndDate: new Date('04/21/2019'),
        subtasks: [
            {
                TaskID: 7,
                TaskName: 'Demand Analysis',
                StartDate: new Date('04/04/2019'),
                EndDate: new Date('04/21/2019'),
                subtasks: [
                    { TaskID: 8, TaskName: 'Customer strength', StartDate: new Date('04/04/2019'), Duration: 4, Predecessor: "5",Progress: 30 },
                    { TaskID: 9, TaskName: 'Market opportunity analysis', StartDate: new Date('04/04/2019'), Duration: 4, Predecessor: "5", taskType: 'FixedDuration' }
                ]
            },
            { TaskID: 10, TaskName: 'Competitor Analysis', StartDate: new Date('04/04/2019'), Duration: 4, Predecessor: "7,8" ,Progress: 30},
            { TaskID: 11, TaskName: 'Product strength analysis', StartDate: new Date('04/04/2019'), Duration: 4, Predecessor: "9", taskType: 'FixedDuration' },
            { TaskID: 12, TaskName: 'Research complete', StartDate: new Date('04/04/2019'), Duration: 0, Predecessor: "10" }
        ]
    },
];
export let taskTypeWorkData: Object[] = [
    {
        TaskID: 1,
        TaskName: 'Product Concept',
        StartDate: new Date('04/02/2019'),
        EndDate: new Date('04/21/2019'),
        subtasks: [
            { TaskID: 2, TaskName: 'Defining the product and its usage', StartDate: new Date('04/02/2019'), Duration: 3, work: 5, Progress: 30, },
            { TaskID: 3, TaskName: 'Defining target audience', StartDate: new Date('04/02/2019'), Duration: 3, taskType: 'FixedDuration' },
            { TaskID: 4, TaskName: 'Prepare product sketch and notes', StartDate: new Date('04/02/2019'), Duration: 3, Predecessor: "2" ,Progress: 30},
        ]
    },
    { TaskID: 5, TaskName: 'Concept Approval', StartDate: new Date('04/02/2019'), Duration: 0, Predecessor: "3,4" },
    {
        TaskID: 6,
        TaskName: 'Market Research',
        StartDate: new Date('04/02/2019'),
        EndDate: new Date('04/21/2019'),
        subtasks: [
            {
                TaskID: 7,
                TaskName: 'Demand Analysis',
                StartDate: new Date('04/04/2019'),
                EndDate: new Date('04/21/2019'),
                subtasks: [
                    { TaskID: 8, TaskName: 'Customer strength', StartDate: new Date('04/04/2019'), Duration: 4, Predecessor: "5",Progress: 30 },
                    { TaskID: 9, TaskName: 'Market opportunity analysis', StartDate: new Date('04/04/2019'), Duration: 4, Predecessor: "5", taskType: 'FixedDuration' }
                ]
            },
            { TaskID: 10, TaskName: 'Competitor Analysis', StartDate: new Date('04/04/2019'), Duration: 4, Predecessor: "7,8" ,Progress: 30},
            { TaskID: 11, TaskName: 'Product strength analysis', StartDate: new Date('04/04/2019'), Duration: 4, Predecessor: "9", taskType: 'FixedDuration' },
            { TaskID: 12, TaskName: 'Research complete', StartDate: new Date('04/04/2019'), Duration: 0, Predecessor: "10", work : 10 }
        ]
    },
];

export let resourceCollection = [
    { resourceId: 1, resourceName: 'Martin Tamer', resourceGroup: 'Planning Team'},
    { resourceId: 2, resourceName: 'Rose Fuller', resourceGroup: 'Testing Team' },
    { resourceId: 3, resourceName: 'Margaret Buchanan', resourceGroup: 'Approval Team' },
    { resourceId: 4, resourceName: 'Fuller King', resourceGroup: 'Development Team' },
    { resourceId: 5, resourceName: 'Davolio Fuller', resourceGroup: 'Approval Team' },
    { resourceId: 6, resourceName: 'Van Jack', resourceGroup: 'Development Team' }
];

export let normalResourceData = [
    {
        TaskID: 1,
        TaskName: 'Project initiation',
        StartDate: new Date('03/29/2019'),
        EndDate: new Date('04/21/2019'),
        subtasks: [
            {
                TaskID: 2, TaskName: 'Identify site location', StartDate: new Date('03/29/2019'), Duration: 3,
                Progress: 30, work: 10, resources: [{ resourceId: 1, resourceUnit: 50 }]
            },
            {
                TaskID: 3, TaskName: 'Perform soil test', StartDate: new Date('03/29/2019'), Duration: 4,
                resources: [{ resourceId: 2, resourceUnit: 70 }], Progress: 30, work: 20
            },
            {
                TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('03/29/2019'), Duration: 4,
                resources: [{ resourceId: 1, resourceUnit: 75 }], Predecessor: 2, Progress: 30, work: 10,
            },
        ]
    },
    {
        TaskID: 5,
        TaskName: 'Project estimation', StartDate: new Date('03/29/2019'), EndDate: new Date('04/21/2019'),
        subtasks: [
            {
                TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('03/29/2019'),
                Duration: 3, Progress: 30, resources: [{ resourceId: 2, resourceUnit: 70 }], Predecessor: '3FS+2', work: 30
            },
            {
                TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/08/2019'), Duration: 12,
                resources: [{ resourceId: 6, resourceUnit: 40 }], Progress: 30, work: 40
            },
            {
                TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/03/2019'),
                Duration: 10, resources: [{ resourceId: 5, resourceUnit: 75 }], Progress: 30, work: 60,
            },
            {
                TaskID: 9, TaskName: 'Excavate for foundations', StartDate: new Date('04/01/2019'),
                Duration: 4, Progress: 30, resources: [4]
            },
            {
                TaskID: 10, TaskName: 'Install plumbing grounds', StartDate: new Date('04/08/2019'), Duration: 4,
                Progress: 30, Predecessor: '9SS', resources: [3]
            },
            {
                TaskID: 11, TaskName: 'Dig footer', StartDate: new Date('04/08/2019'),
                Duration: 3, resources: [2]
            },
            {
                TaskID: 12, TaskName: 'Electrical utilities', StartDate: new Date('04/03/2019'),
                Duration: 4, Progress: 30, resources: [3]
            }
        ]
    },
    {
        TaskID: 13, TaskName: 'Sign contract', StartDate: new Date('04/04/2019'), Duration: 2,
        Progress: 30,
    }
];
export let multiTaskbarData: Object[] = [
    {
        TaskID: 1,
        TaskName: 'Project initiation',
        StartDate: new Date('03/29/2019'),
        EndDate: new Date('04/21/2019'),
        subtasks: [
            {
                TaskID: 2, TaskName: 'Identify site location', StartDate: new Date('03/29/2019'), Duration: 3,
                Progress: 30, work: 10, resources: [{ resourceId: 1, resourceUnit: 50 }]
            },
            {
                TaskID: 3, TaskName: 'Perform soil test', StartDate: new Date('04/03/2019'), Duration: 4,
                resources: [{ resourceId: 1, resourceUnit: 70 }], Predecessor: 2, Progress: 30, work: 20
            },
            {
                TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/09/2019'), Duration: 4,
                resources: [{ resourceId: 1, resourceUnit: 25 }], Predecessor: 3, Progress: 30, work: 10,
            },
        ]
    },
    {
        TaskID: 5,
        TaskName: 'Project estimation', StartDate: new Date('03/29/2019'), EndDate: new Date('04/21/2019'),
        subtasks: [
            {
                TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/01/2019'),
                Duration: 5, Progress: 30, resources: [{ resourceId: 2, resourceUnit: 50 }], work: 30
            },
            {
                TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'), Duration: 4,
                resources: [{ resourceId: 2, resourceUnit: 40 }], Predecessor: '6FS-2', Progress: 30, work: 40
            },
            {
                TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/09/2019'),
                Duration: 4, resources: [{ resourceId: 2, resourceUnit: 75 }], Predecessor: '7FS-1', Progress: 30, work: 60,
            }
        ]
    },
    {
        TaskID: 9,
        TaskName: 'Site work',
        StartDate: new Date('04/04/2019'),
        EndDate: new Date('04/21/2019'),
        subtasks: [
            {
                TaskID: 10, TaskName: 'Install temporary power service', StartDate: new Date('04/01/2019'), Duration: 14,
                Progress: 30, resources: [{ resourceId: 3, resourceUnit: 75 }]
            },
            {
                TaskID: 11, TaskName: 'Clear the building site', StartDate: new Date('04/08/2019'),
                Duration: 9, Progress: 30, Predecessor: '10FS-9', resources: [3]
            },
            {
                TaskID: 12, TaskName: 'Sign contract', StartDate: new Date('04/12/2019'),
                Duration: 5, resources: [3], Predecessor: '11FS-5'
            },
        ]
    },
    {
        TaskID: 13,
        TaskName: 'Foundation',
        StartDate: new Date('04/04/2019'),
        EndDate: new Date('04/21/2019'),
        subtasks: [
            {
                TaskID: 14, TaskName: 'Excavate for foundations', StartDate: new Date('04/01/2019'),
                Duration: 2, Progress: 30, resources: [4]
            },
            {
                TaskID: 15, TaskName: 'Dig footer', StartDate: new Date('04/04/2019'),
                Duration: 2, Predecessor: '14FS + 1', resources: [4]
            },
            {
                TaskID: 16, TaskName: 'Install plumbing grounds', StartDate: new Date('04/08/2019'), Duration: 2,
                Progress: 30, Predecessor: 15, resources: [4]
            }
        ]
    },
    {
        TaskID: 17,
        TaskName: 'Framing',
        StartDate: new Date('04/04/2019'),
        EndDate: new Date('04/21/2019'),
        subtasks: [
            {
                TaskID: 18, TaskName: 'Add load-bearing structure', StartDate: new Date('04/03/2019'),
                Duration: 2, Progress: 30, resources: [5]
            },
            {
                TaskID: 19, TaskName: 'Natural gas utilities', StartDate: new Date('04/08/2019'),
                Duration: 4, Predecessor: '18', resources: [5]
            },
            {
                TaskID: 20, TaskName: 'Electrical utilities', StartDate: new Date('04/11/2019'),
                Duration: 2, Progress: 30, Predecessor: '19FS + 1', resources: [5]
            }
        ]
    }
];

export let multiResources = [
    { resourceId: 1, resourceName: 'Martin Tamer', resourceGroup: 'Planning Team', isExpand: false },
    { resourceId: 2, resourceName: 'Rose Fuller', resourceGroup: 'Testing Team', isExpand: true },
    { resourceId: 3, resourceName: 'Margaret Buchanan', resourceGroup: 'Approval Team', isExpand: false },
    { resourceId: 4, resourceName: 'Fuller King', resourceGroup: 'Development Team', isExpand: false },
    { resourceId: 5, resourceName: 'Davolio Fuller', resourceGroup: 'Approval Team', isExpand: true }
];
export let selfData: object[] = [
    {
        taskID: 1,
        taskName: 'Project Schedule',
        startDate: new Date('02/04/2019'),
        endDate: new Date('03/10/2019')
    },
    {
        taskID: 2,
        taskName: 'Planning',
        startDate: new Date('02/04/2019'),
        endDate: new Date('02/10/2019'),
        parentID: 1
    },
    {
        taskID: 3,
        taskName: 'Plan timeline',
        startDate: new Date('02/04/2019'),
        endDate: new Date('02/10/2019'),
        duration: 6,
        progress: '60',
        parentID: 2
    },
    {
        taskID: 4,
        taskName: 'Plan budget',
        startDate: new Date('02/04/2019'),
        endDate: new Date('02/10/2019'),
        duration: 6,
        progress: '90',
        parentID: 2
    },
    {
        taskID: 5,
        taskName: 'Allocate resources',
        startDate: new Date('02/04/2019'),
        endDate: new Date('02/10/2019'),
        duration: 6,
        progress: '75',
        parentID: 2
    },
    {
        taskID: 6,
        taskName: 'Planning complete',
        startDate: new Date('02/06/2019'),
        endDate: new Date('02/10/2019'),
        duration: 0,
        predecessor: '3FS,4FS,5FS',
        parentID: 2
    },
    {
        taskID: 7,
        taskName: 'Design',
        startDate: new Date('02/13/2019'),
        endDate: new Date('02/17/2019'),
        parentID: 1,
    },
    {
        taskID: 8,
        taskName: 'Software Specification',
        startDate: new Date('02/13/2019'),
        endDate: new Date('02/15/2019'),
        duration: 3,
        progress: '60',
        predecessor: '6FS',
        parentID: 7,
    },
    {
        taskID: 9,
        taskName: 'Develop prototype',
        startDate: new Date('02/13/2019'),
        endDate: new Date('02/15/2019'),
        duration: 3,
        progress: '100',
        predecessor: '6FS',
        parentID: 7,
    },
    {
        taskID: 10,
        taskName: 'Get approval from customer',
        startDate: new Date('02/16/2019'),
        endDate: new Date('02/17/2019'),
        duration: 2,
        progress: '100',
        predecessor: '9FS',
        parentID: 7,
    },
    {
        taskID: 11,
        taskName: 'Design complete',
        startDate: new Date('02/17/2019'),
        endDate: new Date('02/17/2019'),
        duration: 0,
        predecessor: '10FS',
        parentID: 7,
    }
];
export let resourceSelefReferenceData = [
    {
        TaskID: 1,
        TaskName: 'Project initiation',
        StartDate: new Date('03/29/2019'),
        EndDate: new Date('04/21/2019'),
        resources: [{ resourceId: 1, resourceUnit: 50 }]
    },
    {
        TaskID: 2, parentId: 1, TaskName: 'Identify site location', StartDate: new Date('03/29/2019'), Duration: 3,
        Progress: 30, work: 10, resources: [{ resourceId: 2, resourceUnit: 50 }]
    },
    {
        TaskID: 3, parentId: 1, TaskName: 'Perform soil test', StartDate: new Date('04/03/2019'), Duration: 4,
        resources: [{ resourceId: 2, resourceUnit: 70 }], Predecessor: 2, Progress: 30, work: 20
    },
    {
        TaskID: 4, parentId: 1, TaskName: 'Soil test approval', StartDate: new Date('04/09/2019'), Duration: 4,
        resources: [{ resourceId: 3, resourceUnit: 25 }], Predecessor: 3, Progress: 30, work: 10,
    },
    {
        TaskID: 5,
        TaskName: 'Project estimation', StartDate: new Date('03/29/2019'), EndDate: new Date('04/21/2019'),
        resources: [{ resourceId: 2, resourceUnit: 40 }],
    },
    {
        TaskID: 6, parentId: 5, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/01/2019'),
        Duration: 5, Progress: 30, resources: [{ resourceId: 2, resourceUnit: 50 }], work: 30
    },
    {
        TaskID: 7, parentId: 5, TaskName: 'List materials', StartDate: new Date('04/04/2019'), Duration: 4,
        resources: [{ resourceId: 2, resourceUnit: 40 }], Predecessor: '6FS-2', Progress: 30, work: 40
    },
    {
        TaskID: 8, parentId: 5, TaskName: 'Estimation approval', StartDate: new Date('04/09/2019'),
        Duration: 4, resources: [{ resourceId: 5, resourceUnit: 75 }], Predecessor: '7FS-1', Progress: 30, work: 60,
    }

];
export let dragSelfReferenceData: Object[] = [
    {
        taskID: 1,
        taskName: 'Project Schedule',
        startDate: new Date('02/04/2019'),
        endDate: new Date('03/10/2019')
    },
    {
        taskID: 2,
        taskName: 'Planning',
        startDate: new Date('02/04/2019'),
        endDate: new Date('02/10/2019'),
        parentID: 1
    },
    {
        taskID: 3,
        taskName: 'Plan timeline',
        startDate: new Date('02/04/2019'),
        endDate: new Date('02/10/2019'),
        duration: 6,
        progress: '60',
        parentID: 2
    },
    {
        taskID: 4,
        taskName: 'Plan budget',
        startDate: new Date('02/04/2019'),
        endDate: new Date('02/10/2019'),
        duration: 6,
        progress: '90',
        parentID: 2
    },
    {
        taskID: 5,
        taskName: 'Allocate resources',
        startDate: new Date('02/04/2019'),
        endDate: new Date('02/10/2019'),
        duration: 6,
        progress: '75',
        parentID: 2
    },
    {
        taskID: 6,
        taskName: 'Planning complete',
        startDate: new Date('02/06/2019'),
        endDate: new Date('02/10/2019'),
        duration: 0,
        predecessor: '3FS,4FS,5FS',
        parentID: 2
    },
    {
        taskID: 7,
        taskName: 'Design',
        startDate: new Date('02/13/2019'),
        endDate: new Date('02/17/2019'),
        parentID: 1,
    },
    {
        taskID: 8,
        taskName: 'Software Specification',
        startDate: new Date('02/13/2019'),
        endDate: new Date('02/15/2019'),
        duration: 3,
        progress: '60',
        predecessor: '6FS',
        parentID: 7,
    },
    {
        taskID: 9,
        taskName: 'Develop prototype',
        startDate: new Date('02/13/2019'),
        endDate: new Date('02/15/2019'),
        duration: 3,
        progress: '100',
        predecessor: '6FS',
        parentID: 7,
    },
    {
        taskID: 10,
        taskName: 'Get approval from customer',
        startDate: new Date('02/16/2019'),
        endDate: new Date('02/17/2019'),
        duration: 2,
        progress: '100',
        predecessor: '9FS',
        parentID: 7,
    },
    {
        taskID: 11,
        taskName: 'Design complete',
        startDate: new Date('02/17/2019'),
        endDate: new Date('02/17/2019'),
        duration: 0,
        predecessor: '10FS',
        parentID: 7,
    }
];
export let virtualResourceData: Object[] = [
    {
        TaskID: 1,
        TaskName: 'Task 1',
        StartDate: new Date('03/29/2019'),
        EndDate: new Date('04/21/2019'),
        subtasks: [
            {
                TaskID: 2, TaskName: 'Task 2', StartDate: new Date('03/29/2019'), Duration: 2,
                Progress: 30, work: 16, resources: [{ resourceId: 1, unit: 70 }, 6]
            },
            {
                TaskID: 3, TaskName: 'Task 3', StartDate: new Date('03/29/2019'), Duration: 4,
                resources: [2, 3, 5], work: 96
            },
            {
                TaskID: 4, TaskName: 'Task 4', StartDate: new Date('03/29/2019'), Duration: 1,
                work: 16, resources: [8, { resourceId: 9, unit: 50 }], Progress: 30
            },
        ]
    },
    {
        TaskID: 5,
        TaskName: 'Task 5', StartDate: new Date('03/29/2019'), EndDate: new Date('04/21/2019'),
        subtasks: [
            {
                TaskID: 6, TaskName: 'Task 6', StartDate: new Date('03/29/2019'),
                Duration: 3, Progress: 30, resources: [{ resourceId: 4, unit: 50 }], work: 30
            },
            {
                TaskID: 7, TaskName: 'Task 7', StartDate: new Date('04/01/2019'), Duration: 3,
                work: 48, resources: [4, 8]
            },
            {
                TaskID: 8, TaskName: 'Task 8', StartDate: new Date('04/01/2019'),
                Duration: 2, work: 60, resources: [12, { resourceId: 5, unit: 70 }]
            }
        ]
    },
    {
        TaskID: 9, TaskName: 'Task 9', StartDate: new Date('04/01/2019'), Duration: 1,
        Progress: 30, resources: [12], work: 24
    },
    {
        TaskID: 10, TaskName: 'Task 10', StartDate: new Date('04/01/2019'), Duration: 1,
        Progress: 30, resources: [12], work: 24
    },
    {
        TaskID: 11,
        TaskName: 'Task 11',
        StartDate: new Date('03/29/2019'),
        EndDate: new Date('04/21/2019'),
        subtasks: [
            {
                TaskID: 12, TaskName: 'Task 12', StartDate: new Date('03/29/2019'), Duration: 2,
                Progress: 30, work: 16, resources: [{ resourceId: 1, unit: 70 }, 6]
            },
            {
                TaskID: 13, TaskName: 'Task 13', StartDate: new Date('03/29/2019'), Duration: 4,
                resources: [2, 3, 5], work: 96
            },
            {
                TaskID: 14, TaskName: 'Task 14', StartDate: new Date('03/29/2019'), Duration: 1,
                work: 16, resources: [8, { resourceId: 9, unit: 50 }], Progress: 30
            },
        ]
    },
    {
        TaskID: 15,
        TaskName: 'Task 15', StartDate: new Date('03/29/2019'), EndDate: new Date('04/21/2019'),
        subtasks: [
            {
                TaskID: 16, TaskName: 'Task 16', StartDate: new Date('03/29/2019'),
                Duration: 3, Progress: 30, resources: [{ resourceId: 4, unit: 50 }], work: 30
            },
            {
                TaskID: 17, TaskName: 'Task 17', StartDate: new Date('04/01/2019'), Duration: 3,
                work: 48, resources: [4, 8]
            },
            {
                TaskID: 18, TaskName: 'Task 18', StartDate: new Date('04/01/2019'),
                Duration: 2, work: 60, resources: [12, { resourceId: 5, unit: 70 }]
            }
        ]
    },
    {
        TaskID: 19, TaskName: 'Task 19', StartDate: new Date('04/01/2019'), Duration: 1,
        Progress: 30, resources: [12], work: 24
    },
    {
        TaskID: 20, TaskName: 'Task 20', StartDate: new Date('04/01/2019'), Duration: 1,
        Progress: 30, resources: [12], work: 24
    },
    {
        TaskID: 21,
        TaskName: 'Task 21',
        StartDate: new Date('03/29/2019'),
        EndDate: new Date('04/21/2019'),
        subtasks: [
            {
                TaskID: 22, TaskName: 'Task 22', StartDate: new Date('03/29/2019'), Duration: 2,
                Progress: 30, work: 16, resources: [{ resourceId: 1, unit: 70 }, 6]
            },
            {
                TaskID: 23, TaskName: 'Task 23', StartDate: new Date('03/29/2019'), Duration: 4,
                resources: [2, 3, 5], work: 96
            },
            {
                TaskID: 24, TaskName: 'Task 24', StartDate: new Date('03/29/2019'), Duration: 1,
                work: 16, resources: [8, { resourceId: 9, unit: 50 }], Progress: 30
            },
        ]
    },
    {
        TaskID: 25,
        TaskName: 'Task 25', StartDate: new Date('03/29/2019'), EndDate: new Date('04/21/2019'),
        subtasks: [
            {
                TaskID: 26, TaskName: 'Task 26', StartDate: new Date('03/29/2019'),
                Duration: 3, Progress: 30, resources: [{ resourceId: 4, unit: 50 }], work: 30
            },
            {
                TaskID: 27, TaskName: 'Task 27', StartDate: new Date('04/01/2019'), Duration: 3,
                work: 48, resources: [4, 8]
            },
            {
                TaskID: 28, TaskName: 'Task 28', StartDate: new Date('04/01/2019'),
                Duration: 2, work: 60, resources: [12, { resourceId: 5, unit: 70 }]
            }
        ]
    },
    {
        TaskID: 29, TaskName: 'Task 29', StartDate: new Date('04/01/2019'), Duration: 1,
        Progress: 30, resources: [12], work: 24
    }
];
export let editingResources= [
    { resourceId: 1, resourceName: 'Martin Tamer' },
    { resourceId: 2, resourceName: 'Rose Fuller' },
    { resourceId: 3, resourceName: 'Margaret Buchanan' },
    { resourceId: 4, resourceName: 'Fuller King' },
    { resourceId: 5, resourceName: 'Davolio Fuller' },
    { resourceId: 6, resourceName: 'Van Jack' },
    { resourceId: 7, resourceName: 'Fuller Buchanan' },
    { resourceId: 8, resourceName: 'Jack Davolio' },
    { resourceId: 9, resourceName: 'Tamer Vinet' },
    { resourceId: 10, resourceName: 'Vinet Fuller' },
    { resourceId: 11, resourceName: 'Bergs Anton' },
    { resourceId: 12, resourceName: 'Construction Supervisor' }
];
export let editingData: Object[] = [
    {
        TaskID: 1,
        TaskName: 'Project initiation',
        StartDate: new Date('04/02/2019'),
        EndDate: new Date('04/21/2019'),
        subtasks: [
            {
                TaskID: 2, TaskName: 'Identify site location', StartDate: new Date('04/02/2019'), Duration: 0,
                Progress: 30, resources: [1], info: 'Measure the total property area alloted for construction'
            },
            {
                TaskID: 3, TaskName: 'Perform soil test', StartDate: new Date('04/02/2019'), Duration: 4, Predecessor: '2',
                resources: [2, 3, 5], info: 'Obtain an engineered soil test of lot where construction is planned.' +
                    'From an engineer or company specializing in soil testing'
            },
            { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'), Duration: 0, Predecessor: '3', Progress: 30 },
        ]
    },
    {
        TaskID: 5,
        TaskName: 'Project estimation',
        StartDate: new Date('04/02/2019'),
        EndDate: new Date('04/21/2019'),
        subtasks: [
            {
                TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2019'),
                Duration: 3, Predecessor: '4', Progress: 30, resources: 4,
                info: 'Develop floor plans and obtain a materials list for estimations'
            },
            {
                TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'),
                Duration: 3, Predecessor: '6', resources: [4, 8], info: ''
            },
            {
                TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'),
                Duration: 0, Predecessor: '7', resources: [12, 5], info: ''
            }
        ]
    },
    {
        TaskID: 9, TaskName: 'Sign contract', StartDate: new Date('04/04/2019'), Duration: 1,
        Predecessor: '8', Progress: 30, resources: [12],
        info: 'If required obtain approval from HOA (homeowners association) or ARC (architectural review committee)'
    },
    {
        TaskID: 10,
        TaskName: 'Project approval and kick off',
        StartDate: new Date('04/04/2019'),
        EndDate: new Date('04/21/2019'),
        Duration: 0,
        Predecessor: '9'
    },
    {
        TaskID: 11,
        TaskName: 'Site work',
        StartDate: new Date('04/04/2019'),
        EndDate: new Date('04/21/2019'),
        subtasks: [
            {
                TaskID: 12, TaskName: 'Clear the building site', StartDate: new Date('04/04/2019'),
                Duration: 2, Progress: 30, Predecessor: '9', resources: [6, 7],
                info: 'Clear the building site (demolition of existing home if necessary)'
            },
            {
                TaskID: 13, TaskName: 'Install temporary power service', StartDate: new Date('04/04/2019'),
                Duration: 2, Predecessor: '12', resources: [6, 7], info: ''
            },
        ]
    },
    {
        TaskID: 14,
        TaskName: 'Foundation',
        StartDate: new Date('04/04/2019'),
        EndDate: new Date('04/21/2019'),
        subtasks: [
            {
                TaskID: 15, TaskName: 'Excavate for foundations', StartDate: new Date('04/04/2019'),
                Duration: 3, Progress: 30, Predecessor: '13', resources: [2, 8],
                info: 'Excavate the foundation and dig footers (Scope of work is dependent of foundation designed by engineer)'
            },
            {
                TaskID: 16, TaskName: 'Dig footer', StartDate: new Date('04/04/2019'),
                Duration: 2, Predecessor: '15FF', resources: [8], info: ''
            },
            {
                TaskID: 17, TaskName: 'Install plumbing grounds', StartDate: new Date('04/04/2019'), Duration: 4,
                Progress: 30, Predecessor: '15', resources: [9], info: ''
            },
            {
                TaskID: 18, TaskName: 'Pour a foundation and footer with concrete', StartDate: new Date('04/04/2019'),
                Duration: 1, Predecessor: '17', resources: [8, 9, 10], info: ''
            },
            {
                TaskID: 19, TaskName: 'Cure basement walls', StartDate: new Date('04/04/2019'), Duration: 4,
                Progress: 30, Predecessor: '18', resources: [10], info: ''
            },
        ]
    },
    {
        TaskID: 20,
        TaskName: 'Framing',
        StartDate: new Date('04/04/2019'),
        EndDate: new Date('04/21/2019'),
        subtasks: [
            {
                TaskID: 21, TaskName: 'Add load-bearing structure', StartDate: new Date('04/04/2019'),
                Duration: 3, Progress: 30, Predecessor: '19', resources: [4, 5],
                info: 'Build the main load-bearing structure out of thick pieces of wood and' +
                    'possibly metal I-beams for large spans with few supports'
            },
            {
                TaskID: 22, TaskName: 'Install floor joists', StartDate: new Date('04/04/2019'),
                Duration: 3, Predecessor: '21', resources: [2, 3], info: 'Add floor and ceiling joists and install subfloor panels'
            },
            {
                TaskID: 23, TaskName: 'Add ceiling joists', StartDate: new Date('04/04/2019'),
                Duration: 3, Progress: 30, Predecessor: '22SS', resources: [5], info: ''
            },
            {
                TaskID: 24, TaskName: 'Install subfloor panels', StartDate: new Date('04/04/2019'),
                Duration: 3, Predecessor: '23', resources: [8, 9]
            },
            {
                TaskID: 25, TaskName: 'Frame floor walls', StartDate: new Date('04/04/2019'), Duration: 3,
                Progress: 30, Predecessor: '24', resources: [10], info: ''
            },
            {
                TaskID: 26, TaskName: 'Frame floor decking', StartDate: new Date('04/04/2019'), Duration: 3,
                Progress: 30, Predecessor: '25SS', resources: [4, 8], info: ''
            },
        ]
    },
    {
        TaskID: 27,
        TaskName: 'Exterior finishing',
        StartDate: new Date('04/04/2019'),
        EndDate: new Date('04/21/2019'),
        subtasks: [
            {
                TaskID: 28, TaskName: 'Cover outer walls and roof in OSB', StartDate: new Date('04/04/2019'),
                Duration: 3, Progress: 30, Predecessor: '26', resources: [2, 8],
                info: 'Cover outer walls and roof in OSB or plywood and a water-resistive barrier'
            },
            {
                TaskID: 29, TaskName: 'Add water resistive barrier', StartDate: new Date('04/04/2019'),
                Duration: 3, Predecessor: '28', resources: [1, 10],
                info: 'Cover the walls with siding, typically vinyl, wood, or brick veneer but possibly stone or other materials'
            },
            {
                TaskID: 30, TaskName: 'Install roof shingles', StartDate: new Date('04/04/2019'), Duration: 3,
                Progress: 30, Predecessor: '29', resources: [8, 9], info: 'Install roof shingles or other covering for flat roof'
            },
            { TaskID: 31, TaskName: 'Install windows', StartDate: new Date('04/04/2019'), Duration: 3, Predecessor: '29', resources: 7 },
        ]
    },
    {
        TaskID: 32,
        TaskName: 'Utilities',
        StartDate: new Date('04/04/2019'),
        EndDate: new Date('04/21/2019'),
        subtasks: [
            {
                TaskID: 33, TaskName: 'Install internal plumbing', StartDate: new Date('04/04/2019'), Duration: 3,
                Progress: 30, Predecessor: '26', resources: [1, 10]
            },
            {
                TaskID: 34, TaskName: 'Install HVAC', StartDate: new Date('04/04/2019'), Duration: 3, Predecessor: '33',
                resources: [4, 9], info: 'Add internal plumbing, HVAC, electrical, and natural gas utilities'
            },
            {
                TaskID: 35, TaskName: 'Electrical utilities', StartDate: new Date('04/04/2019'), Duration: 3,
                Progress: 30, Predecessor: '34'
            },
            {
                TaskID: 36, TaskName: 'Natural gas utilities', StartDate: new Date('04/04/2019'), Duration: 3,
                Predecessor: '35', resources: 11
            },
            {
                TaskID: 37, TaskName: 'Install bathroom fixtures', StartDate: new Date('04/04/2019'), Duration: 3,
                Progress: 30, Predecessor: '35', resources: [3, 7]
            },
        ],
        info: 'Building inspector visits if necessary to approve utilities and framing'
    },
    {
        TaskID: 38,
        TaskName: 'Interior finsihing',
        StartDate: new Date('04/04/2019'),
        EndDate: new Date('04/21/2019'),
        subtasks: [
            {
                TaskID: 39, TaskName: 'Install insulation', StartDate: new Date('04/04/2019'),
                Duration: 3, Progress: 30, Predecessor: '37', resources: [1, 8], info: 'Frame interior walls with wooden 2×4s'
            },
            {
                TaskID: 40, TaskName: 'Install  drywall panels', StartDate: new Date('04/04/2019'), Duration: 3,
                Predecessor: '39', resources: 5,
                info: 'Install insulation and interior drywall panels (cementboard for wet areas) and to complete walls and ceilings'
            },
            {
                TaskID: 41, TaskName: 'Spackle', StartDate: new Date('04/04/2019'), Duration: 3,
                Progress: 30, Predecessor: '40', resources: 10
            },
            {
                TaskID: 42, TaskName: 'Apply primer', StartDate: new Date('04/04/2019'), Duration: 3,
                Predecessor: '41', resources: [10, 11]
            },
            {
                TaskID: 43, TaskName: 'Paint wall and ceilings', StartDate: new Date('04/04/2019'),
                Duration: 3, Progress: 30, Predecessor: '42', resources: [2, 9]
            },
            {
                TaskID: 44, TaskName: 'Install modular kitchen', StartDate: new Date('04/04/2019'),
                Duration: 3, Progress: 30, Predecessor: '43', resources: [5, 7]
            },
        ]
    },
    {
        TaskID: 45,
        TaskName: 'Flooring',
        StartDate: new Date('04/04/2019'),
        EndDate: new Date('04/21/2019'),
        subtasks: [
            {
                TaskID: 46, TaskName: 'Tile kitchen, bathroom and entry walls', StartDate: new Date('04/04/2019'),
                Duration: 3, Progress: 30, Predecessor: '44', resources: [4, 9, 3],
                info: 'Additional tiling on top of cementboard for wet areas, such as the bathroom and kitchen backsplash'
            },
            {
                TaskID: 47, TaskName: 'Tile floor', StartDate: new Date('04/04/2019'), Duration: 3, Predecessor: '46SS',
                resources: [2, 8], info: 'Installation of final floor covering, such as floor tile, carpet, or wood flooring'
            },
        ]
    },
    {
        TaskID: 48,
        TaskName: 'Final Acceptance',
        StartDate: new Date('04/04/2019'),
        EndDate: new Date('04/21/2019'),
        subtasks: [
            {
                TaskID: 49, TaskName: 'Final inspection', StartDate: new Date('04/04/2019'), Duration: 2,
                Progress: 30, Predecessor: '47', resources: 12, info: 'Ensure the contracted items'
            },
            {
                TaskID: 50, TaskName: 'Cleanup for occupancy', StartDate: new Date('04/04/2019'), Duration: 2,
                Predecessor: '49', resources: [1, 5], info: 'Installation of major appliances'
            },
            {
                TaskID: 51, TaskName: 'Property handover', StartDate: new Date('04/04/2019'), Duration: 0,
                Predecessor: '50', info: 'Ending the contract'
            },
        ]
    },
];
export let splitTasksData: object[] = [
    {
        TaskID: 1,
        TaskName: 'Project Schedule',
        StartDate: new Date('02/04/2019'),
        EndDate: new Date('03/10/2019'),
        subtasks: [
            {
                TaskID: 2,
                TaskName: 'Planning',
                StartDate: new Date('02/04/2019'),
                subtasks: [
                    {
                        TaskID: 3, TaskName: 'Plan timeline', StartDate: new Date('02/04/2019'), EndDate: new Date('02/10/2019'),
                        Duration: 10, Progress: '60',
                        Segments: [
                            { StartDate: new Date('02/04/2019'), Duration: 2 },
                            { StartDate: new Date('02/05/2019'), Duration: 5 },
                            { StartDate: new Date('02/08/2019'), Duration: 3 }
                        ]
                    },
                    {
                        TaskID: 4, TaskName: 'Plan budget', StartDate: new Date('02/04/2019'), EndDate: new Date('02/10/2019'),
                        Duration: 10, Progress: '90'
                    },
                    {
                        TaskID: 5, TaskName: 'Allocate resources', StartDate: new Date('02/04/2019'), EndDate: new Date('02/10/2019'),
                        Duration: 10, Progress: '75',
                        Segments: [
                            { StartDate: new Date('02/04/2019'), Duration: 4 },
                            { StartDate: new Date('02/08/2019'), Duration: 2 }
                        ]
                    },
                    {
                        TaskID: 6, TaskName: 'Planning complete', StartDate: new Date('02/21/2019'), EndDate: new Date('02/21/2019'),
                        Duration: 0, Predecessor: '3FS,5FS'
                    },
                ]
            },
            {
                TaskID: 7,
                TaskName: 'Design',
                StartDate: new Date('02/25/2019'),
                subtasks: [
                    {
                        TaskID: 8, TaskName: 'Software Specification', StartDate: new Date('02/25/2019'), EndDate: new Date('03/02/2019'),
                        Duration: 5, Progress: '60', Predecessor: '6FS'
                    },
                    {
                        TaskID: 9, TaskName: 'Develop prototype', StartDate: new Date('02/25/2019'), EndDate: new Date('03/02/2019'),
                        Duration: 5, Progress: '100', Predecessor: '6FS',
                        Segments: [
                            { StartDate: new Date('02/25/2019'), Duration: 2 },
                            { StartDate: new Date('02/28/2019'), Duration: 3 }
                        ]
                    },
                    {
                        TaskID: 10, TaskName: 'Get approval from customer', StartDate: new Date('02/25/2019'),
                        EndDate: new Date('03/01/2019'), Duration: 4, Progress: '100', Predecessor: '9FS'
                    },
                    {
                        TaskID: 11, TaskName: 'Design complete', StartDate: new Date('02/25/2019'), EndDate: new Date('02/25/2019'),
                        Duration: 0, Predecessor: '10FS'
                    }
                ]
            }
        ]
    }
];
