function createSection (title, contents) {
  return {
    title,
    contents
  }
}

function createEntry (
  title,
  subtitle = null,
  categories = [],
  description = null
) {
  return {
    title,
    subtitle,
    categories,
    description
  }
}

export default [
  createSection('2022', [
    
    /*createEntry('Graduated UNSW', "BE (Hons) CompEng", [
      'Computing'
    ]),*/
    createEntry('Vivado', "± 2% success rate", [
      'Computing'
    ]),
    createEntry(
      'Thesis',
      "", [
        'Computing',
        'Security'
      ],
      "“Smart” Vacuum Cleaners - An Audit Into The Security and Integrity of IoT Systems"
    ),
  ]),
  
  createSection('2021', [
    createEntry('Security Engineer @ Atlassian', "2021/2022 Summer Program", [
      'Security',
      'Computing'
    ]),
    createEntry('First in CSE x SecSoc CTF Competition', null, [
      'Security',
      'Computing'
    ]),
    createEntry(
      'CommBank Cyber Prize',
      null,
      ['Security'],
      'Received an award in recognition for SECedu course excellence '
    ),

    createEntry(
      'Broadcast Engineer @ UNSW Sydney',
      null,
      ['Audio/Visual'],
      'Livestreaming of university events and lectures'
    ),
  ]),
  createSection('2020', [
    createEntry(
      'First in COMP6[84]43 Course',
      null,
      ['Security', 'Computing'],
      'Web Application Security and Testing'
    ),
    createEntry('First in CSE x SecSoc CTF Competition', null, [
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
    createEntry('Volunteer @ Sculpture by the Sea', '2015, 2019', []),
    createEntry(
      'Computer Science Tutor @ UNSW Sydney',
      '2019 - present',
      ['Computing', 'Security'],
      'Courses tutored in 2021:\nCOMP6[84]41 - [Extended] Security Engineering and Cyber Security\nCOMP6[84]43 - [Extended] Web Application Security Testing\nCOMP6447 - System and Software Security Assessment'
    ),
    createEntry(
      'Workshop Content Writer @ CSE CompClub 2019 Summer',
      null,
      ['Security', 'Computing'],
      'Created workshop content about information security and security engineering.'
    ),
    createEntry('Ryndeum', '2019 - present', ['Computing'], 'Software Solutions')
  ]),
  createSection('2018', [
    createEntry('Mentor @ CSE CompClub 2018 Winter', null, [
      'Security',
      'Computing'
    ]),
    createEntry('Event Technician @ UNSW Hospitality', '2018 - 2020', [
      'Audio/Visual',
      'Computing'
    ]),
    createEntry(
      'Started Electrical Engineering / Computer Science at UNSW Sydney',
      null,
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
    createEntry('AV Technician @ RICE Movement', '2017 - present', [
      'Audio/Visual'
    ])
  ])
]
