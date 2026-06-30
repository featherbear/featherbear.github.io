function createSection (title: string, contents: ReturnType<typeof createEntry>[]) {
  return {
    title,
    contents
  }
}

function createEntry (
  title: string,
  subtitle: string = "",
  categories: string[] = [],
  description: string | string[] = ""
) {
  return {
    title,
    subtitle,
    categories,
    description
  }
}

export default [
  createSection('2023', [
    createEntry('Security Engineer @ Atlassian', "2023 - present", [
      'Security',
      'Computing'
    ]),
    createEntry('Casual Lecturer @ UNSW', "2023 - 2025", [
      'Security',
      'Computing'
    ])
  ]),
  createSection('2022', [
    createEntry('Graduated from UNSW', "BE (Hons) Computer Engineering (Honours Class 1)", [
      'Computing'
    ]),
    createEntry(
      'Thesis Publication',
      "", [
        'Computing',
        'Security'
      ],
      "“Smart” Vacuum Cleaners - An Audit Into The Security and Integrity of IoT Systems"
    ),
    createEntry('Research & Development Engineer @ Audinate', "", [
      'Audio/Visual',
      'Computing'
    ], "Prototyping and proof of concept implemention for Dante Connect")
  ]),
  
  createSection('2021', [
    createEntry('Security Engineer @ Atlassian', "", [
      'Security',
      'Computing'
    ]),
    createEntry('First in CSE x SecSoc CTF Competition', "", [
      'Security',
      'Computing'
    ]),
    createEntry(
      'CommBank Cyber Prize',
      "",
      ['Security'],
      'Received an award in recognition of excellence in COMP6843 (Extended Web Application Security)'
    ),

    createEntry(
      'Broadcast Engineer @ UNSW Sydney',
      "",
      ['Audio/Visual'],
      'Livestreaming of university events and lectures'
    ),
  ]),
  createSection('2020', [
    createEntry(
      'First in COMP6[84]43 Course',
      "",
      ['Security', 'Computing'],
      'Web Application Security and Testing'
    ),
    createEntry('First in CSE x SecSoc CTF Competition', "", [
      'Security',
      'Computing'
    ]),
    createEntry(
      'Two Hands Lifted',
      '2020 - present',
      ['Audio/Visual'],
      'Wedding Videography and Livestreaming'
    )
  ]),
  createSection('2019', [
    // createEntry('Volunteer @ Sculpture by the Sea', '2015, 2019', []),
    createEntry(
      'Computer Science Tutor @ UNSW Sydney',
      '2019 - present',
      ['Computing', 'Security'],
      'Teaching of higher-level Computer Science and Cyber Security courses'
    ),
    createEntry(
      'Workshop Content Writer @ CSE CompClub 2019 Summer',
      "",
      ['Security', 'Computing'],
      'Created workshop content about information security and security engineering.'
    ),
    createEntry('Ryndeum', '2019 - 2022', ['Computing'], 'Software Solutions')
  ]),
  createSection('2018', [
    createEntry('Mentor @ CSE CompClub 2018 Winter', "", [
      'Security',
      'Computing'
    ]),
    createEntry('Event Technician @ UNSW Hospitality', '2018 - 2020', [
      'Audio/Visual',
      'Computing'
    ]),
    createEntry(
      'Started Electrical Engineering / Computer Science at UNSW Sydney',
      "",
      ['Computing']
    )
  ]),
  createSection('2017', [
    createEntry(
      'Graduated from Sydney Technical High School',
      '2012 - 2017',
      ['Computing', 'Audio/Visual'],
      [
        'School Prefect',
        'First in Information Processes & Technology',
        'First in Software Design & Development',
        'First in Electronics',
        'Deputy Principals’ Prize for Senior Contribution to School Life',
        'Sound and Lighting Crew Director'
      ]
    ),
    createEntry('AV Technician @ RICE Movement', '2017 - 2022', [
      'Audio/Visual'
    ])
  ])
]
