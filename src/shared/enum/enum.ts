export enum TrendingStatus {
	Up = 'up',
	Down = 'down',
	Neutral = 'neutral'
}

export enum SortBy {
	Asc = 'ASC',
	Desc = 'DESC'
}

export enum IGAScoreList {
	MaxSpeed = 'Max Speed',
	TimeToMaxSpeed = 'Time to Max Speed',
	AvgSeparationCreated = 'Avg. Separation Created',
	AvgAfterCatch = 'Avg. After catch',
	AvgTransitionTime = 'Avg. Transition time',
	AvgSeparationAllowed = 'Avg. Separation Allowed',
	AvgClosingTime = 'Avg. Closing time',
	MaxGetOffSpeed = 'Max Get Off Speed',
	AvgSackTime = 'Avg. Sack Time',
	PeakMomentum = 'Peak Momentum',
	AvgShedTime = 'Avg. Shed time',
	MaxContactSpeed = 'Max Contact Speed',
	AvgTimeToBallCarrier = 'Avg. Time To Ball Carrier'
}

export enum FeatureList {
	Analytics = 'Analytics',
	PlayerSearch = 'Player Search',
	Sortlists = 'Shortlists',
	RecruitingDashboard = 'Recruiting Dashboards',
	MultiPlayerComparison = 'Multi Player Comparison',
	VideoLibrary = 'Video Library',
	ManageProspectList = 'Manage Prospect List',
	Admin = 'Admin',
	RecruitingWorkflows = 'Recruiting Workflows',
	Fundraising = 'Fundraising',
	EventsAndSponsor = 'Events & Sponsor',
	FundraisingVideoClips = 'Fundraising Video clips',
	LiveStream = 'Live Stream',
	VideoStudio = 'Video Studio',
	FilmRoom = 'Film Room',
	ProspectsGradingList = 'Prospects Grading List',
	ProspectsSharingList = 'Prospects Sharing List'
}

export enum SidebarList {
	Preferences = 'Preferences',
	Account = 'Account',
	Faq = 'Faq',
	PrivacyPolicy = 'Privacy Policy',
	TermOfService = 'Term Of Service'
}

export enum PositionTitle {
	WideReceiver = 'Wide Receiver',
	RunningBack = 'Running Back',
	Safety = 'Safety',
	Cornerback = 'Cornerback',
	Linebacker = 'Linebacker',
	Edge = 'Edge',
	TightEnd = 'Tight End',
	OffensiveLinemen = 'Offensive Linemen',
	DefensiveLinemen = 'Defensive Linemen',
	Kicker = 'Kicker',
	QuarterBack = 'Quarter Back'
}

export enum PositionValue {
	Wr = 'WR',
	Rb = 'RB',
	S = 'S',
	Cb = 'CB',
	Lb = 'LB',
	Edge = 'EDGE',
	Te = 'TE',
	Ol = 'OL',
	Dl = 'DL',
	K = 'K',
	Qb = 'QB'
}

export enum Position {
	WR = 'Wide Receiver',
	RB = 'Running Back',
	S = 'Safety',
	CB = 'Cornerback',
	LB = 'Linebacker',
	EDGE = 'Edge',
	TE = 'Tight End',
	OL = 'Offensive Linemen',
	DL = 'Defensive Linemen',
	K = 'Kicker',
	QB = 'Quarter Back'
}

export enum CollegeProjection {
	Division2 = 'Division 2',
	Fcs = 'FCS',
	GroupOf5 = 'Group of 5',
	Power5 = 'Power 5',
	Power5Elite = 'Power 5 Elite'
}

export enum State {
	Alabama = 'Alabama',
	Alaska = 'Alaska',
	Arizona = 'Arizona',
	Arkansas = 'Arkansas',
	California = 'California',
	Canal = 'Canal',
	Colorado = 'Colorado',
	Connecticut = 'Connecticut',
	Delaware = 'Delaware',
	District = 'District',
	Florida = 'Florida',
	Georgia = 'Georgia',
	Guam = 'Guam',
	Hawaii = 'Hawaii',
	Idaho = 'Idaho',
	Illinois = 'Illinois',
	Indiana = 'Indiana',
	Iowa = 'Iowa',
	Kansas = 'Kansas',
	Kentucky = 'Kentucky',
	Louisiana = 'Louisiana',
	Maine = 'Maine',
	Maryland = 'Maryland',
	Massachusetts = 'Massachusetts',
	Michigan = 'Michigan',
	Minnesota = 'Minnesota',
	Mississippi = 'Mississippi',
	Missouri = 'Missouri',
	Montana = 'Montana',
	Nebraska = 'Nebraska',
	Nevada = 'Nevada',
	New = 'New',
	North = 'North',
	Ohio = 'Ohio',
	Oklahoma = 'Oklahoma',
	Oregon = 'Oregon',
	Pennsylvania = 'Pennsylvania',
	Puerto = 'Puerto',
	Rhode = 'Rhode',
	South = 'South',
	Tennessee = 'Tennessee',
	Texas = 'Texas',
	Utah = 'Utah',
	Vermont = 'Vermont',
	Virgin = 'Virgin',
	Virginia = 'Virginia',
	Washington = 'Washington',
	West = 'West',
	Wisconsin = 'Wisconsin',
	Wyoming = 'Wyoming'
}

export enum StateTitle {
	//Canada
	Alberta = 'Alberta',
	BritishColombia = 'British Colombia',
	Manitoba = 'Manitoba',
	NewBrunswick = 'New Brunswick',
	NewfoundlandAndLabrador = 'Newfoundland and Labrador',
	NorthwestTerritories = 'Northwest Territories',
	NovaScotia = 'Nova Scotia',
	Nunavut = 'Nunavut',
	Ontario = 'Ontario',
	PrinceEdwardIsland = 'Prince Edward Island',
	Quebec = 'Quebec',
	Saskatchewan = 'Saskatchewan',
	Yukon = 'Yukon',
	//United State
	Alabama = 'Alabama',
	Alaska = 'Alaska',
	Arizona = 'Arizona',
	Arkansas = 'Arkansas',
	California = 'California',
	Colorado = 'Colorado',
	Connecticut = 'Connecticut',
	Delaware = 'Delaware',
	DistrictOfColumbia = 'District Of Columbia',
	Florida = 'Florida',
	//
	Georgia = 'Georgia',
	Idaho = 'Idaho',
	Illinois = 'Illinois',
	Indiana = 'Indiana',
	Iowa = 'Iowa',
	Kansas = 'Kansas',
	Kentucky = 'Kentucky',
	Louisiana = 'Louisiana',
	Maine = 'Maine',
	Maryland = 'Maryland',
	//
	Massachusetts = 'Massachusetts',
	Michigan = 'Michigan',
	Minnesota = 'Minnesota',
	Mississippi = 'Mississippi',
	Missouri = 'Missouri',
	Montana = 'Montana',
	Nebraska = 'Nebraska',
	Nevada = 'Nevada',
	NewHampshire = 'New Hampshire',
	NewJersey = 'New Jersey',
	//
	NewMexico = 'New Mexico',
	NewYork = 'New York',
	NorthCarolina = 'North Carolina',
	NorthDakota = 'North Dakota',
	Ohio = 'Ohio',
	Oklahoma = 'Oklahoma',
	Oregon = 'Oregon',
	Pennsylvania = 'Pennsylvania',
	RhodeIsland = 'Rhode Island',
	SouthCarolina = 'South Carolina',
	//
	SouthDakota = 'South Dakota',
	Tennessee = 'Tennessee',
	Texas = 'Texas',
	Utah = 'Utah',
	Vermont = 'Vermont',
	Virginia = 'Virginia',
	Washington = 'Washington',
	WestVirginia = 'West Virginia',
	Wisconsin = 'Wisconsin',
	Wyoming = 'Wyoming',
	//Mexico
	Aguascalientes = 'Aguascalientes',
	BajaCaliforniaNorte = 'Baja California Norte',
	BajaCaliforniaSur = 'Baja California Sur',
	Campeche = 'Campeche',
	Chiapas = 'Chiapas',
	Chihuahua = 'Chihuahua',
	Coahuila = 'Coahuila',
	Colima = 'Colima',
	FederalDistrict = 'Federal District',
	Durango = 'Durango',
	Guanajuato = 'Guanajuato',
	Guerrero = 'Guerrero',
	Hidalgo = 'Hidalgo',
	Jalisco = 'Jalisco',
	MexicoState = 'Mexico State',
	Michoacán = 'Michoacán',
	Morelos = 'Morelos',
	Nayarit = 'Nayarit',
	NuevoLeon = 'Nuevo Leon',
	Oaxaca = 'Oaxaca',
	Puebla = 'Puebla',
	Querétaro = 'Querétaro',
	QuintanaRoo = 'Quintana Roo',
	SanLuisPotosi = 'SanLuis Potosi',
	Sinaloa = 'Sinaloa',
	Sonora = 'Sonora',
	Tabasco = 'Tabasco',
	Tamaulipas = 'Tamaulipas',
	Tlaxcala = 'Tlaxcala',
	Veracruz = 'Veracruz',
	Yucatan = 'Yucatan',
	Zacatecas = 'Zacatecas'
}

export enum StateValue {
	//canada
	Ab = 'AB',
	Bc = 'BC',
	Mb = 'MB',
	Nb = 'NB',
	Nl = 'NL',
	Nt = 'NT',
	Ns = 'NS',
	Nu = 'NU',
	On = 'ON',
	Pe = 'PE',
	Qc = 'QC',
	Sk = 'SK',
	Yt = 'YT',
	//United State
	Al = 'AL',
	Ak = 'AK',
	Az = 'AZ',
	Ar = 'AR',
	Ca = 'CA',
	Co = 'CO',
	Ct = 'CT',
	De = 'DE',
	Dc = 'DC',
	Fl = 'FL',
	//
	Ga = 'GA',
	Id = 'ID',
	Il = 'IL',
	In = 'IN',
	Ia = 'IA',
	Ks = 'KS',
	Ky = 'KY',
	La = 'LA',
	Me = 'ME',
	Md = 'MD',
	//
	Ma = 'MA',
	Mi = 'MI',
	Mn = 'MN',
	Ms = 'MS',
	Mo = 'MO',
	Mt = 'MT',
	Ne = 'NE',
	Nv = 'NV',
	Nh = 'NH',
	Nj = 'NJ',
	//
	Nm = 'NM',
	Ny = 'NY',
	Nc = 'NC',
	Nd = 'ND',
	Oh = 'OH',
	Ok = 'OK',
	Or = 'OR',
	Pa = 'PA',
	Ri = 'RI',
	Sc = 'SC',
	//
	Sd = 'SD',
	Tn = 'TN',
	Tx = 'TX',
	Ut = 'UT',
	Vt = 'VT',
	Va = 'VA',
	Wa = 'WA',
	Wv = 'WV',
	Wi = 'WI',
	Wy = 'WY',
	//Mexico
	Agu = 'AGU',
	Bcn = 'BCN',
	Bcs = 'BCS',
	Cam = 'CAM',
	Chp = 'CHP',
	Chh = 'CHH',
	Coa = 'COA',
	Col = 'COL',
	Dif = 'DIF',
	Dur = 'DUR',
	Gua = 'GUA',
	Gro = 'GRO',
	Hid = 'HID',
	Jal = 'JAL',
	Mex = 'MEX',
	Mic = 'MIC',
	Mor = 'MOR',
	Nay = 'NAY',
	Nle = 'NLE',
	Oax = 'OAX',
	Pue = 'PUE',
	Que = 'QUE',
	Roo = 'ROO',
	Slp = 'SLP',
	Sin = 'SIN',
	Son = 'SON',
	Tab = 'TAB',
	Tam = 'TAM',
	Tla = 'TLA',
	Ver = 'VER',
	Yuc = 'YUC',
	Zac = 'ZAC'
}

export enum ModelTypes {
	SideBar = 'Sidebar',
	SelectPlayer = 'Select Player',
	PlayerComparison = 'Player Comparison',
	CreateShortList = 'Create Shortlist',
	CreateDashboard = 'Create Dashboard',
	CreateProspect = 'Create Prospect',
	CreateProspectList = 'Create Prospect List',
	AddPlayerTag = 'Add Player Tag',
	ViewPlayerTag = 'View Player Tag',
	AddPlayerIdColor = 'Add Player Id Color',
	RemovePlayerIdColor = 'Remove Player Id Color',
	QuickNoteList = 'Quick Note List',
	EvaluationList = 'Evaluation List',
	Commitment = 'Commitment',
	Communication = 'Communication',
	BacklogList = 'BacklogList',
	Delete = 'Delete',
	AddedTeam = 'Added Team',
	AddedMultipleTeam = 'Added Multiple Team',
	AddedUniversity = 'Added University',
	AddedMultipleUniversity = 'Added Multiple University',
	AddedPlayer = 'Added Player',
	AddedMultiplePlayer = 'Added Multiple Player',
	AddCustomField = 'Add Custom Field',
	Loading = 'Loader',
	SelectTeam = 'selectTeam',
	viewMetrics = 'View Metrics',
	DeleteProspectList = 'Delete Prospect List',
	ChangePlayerIdColor = 'Change Player Id Color',
	ImportAddressBook = 'Import Address Book',
	EditAddressBook = 'Edit Address Book',
	AddCollegeReadiness = 'Add College Readiness',
	ProspectShare = 'Prospect Share'
}

export enum TableKeys {
	CollegeProjection = 'coachCollegeProjection',
	ClassOf = 'classOf',
	Position = 'position',
	State = 'playerState',
	Height = 'heightRange',
	Weight = 'weightRange',
	IgaScore = 'igaScoreRange',
	RaScore = 'raScoreRange',
	ProductionScore = 'productionScoreRange',
	OfferCount = 'offerCount',
	HighSchool = 'highSchool',
	GpaScore = 'gpaScoreRange',
	SatScore = 'satScoreRange',
	ActScore = 'actScoreRange'
}

export enum PlayerSelectionTypes {
	All = 'ALL',
	Position = 'POSITION',
	Score = 'SCORE'
}

export enum ConversionType {
	Metric = 'metric',
	Imperial = 'imperial'
}

export enum PlayerActions {
	AddToShortlist = 'Add to shortlist',
	AddToRecruitingDashboard = 'Add to recruiting dashboard',
	ViewFullProfile = 'View Full Profile',
	AddNote = 'Add Quick note',
	AddEvaluation = 'Add Evaluation',
	ViewOffers = 'View Offers',
	ViewHighlightsClips = 'View Highlights Clips',
	PlayerCollegeIdColor = 'Player College Id Color',
	AddToProspectList = 'Add to prospect list'
}

export enum ProspectTitle {
	HighProspect = 'High Prospect',
	MediumProspect = 'Medium Prospect',
	LowProspect = 'Low Prospect',
	Neutral = 'Neutral'
}

export enum ProspectValue {
	High = 'high',
	Medium = 'medium',
	Low = 'low',
	Neutral = 'neutral'
}

export enum Scores {
	Iga = 'IGA',
	Prod = 'PROD',
	Ra = 'RA',
	Gpa = 'GPA',
	Act = 'ACT',
	Sat = 'SAT'
}

export enum Evaluation {
	PlayerInfo = 'Player Info',
	CombineMetrics = 'Combine Metrics',
	Score = 'Score',
	BestAttribute = 'BEST ATTRIBUTE - Area of Strength',
	WorstAttribute = 'WORST ATTRIBUTE - Area of Weakness',
	SchemeFit = 'Scheme Fit',
	HighSchoolCoachsPlayerSummary = "High School Coach's Player Summary"
}

export enum PlayerClipsTitle {
	ShowAll = 'Show All',
	RaScoringVideos = 'RA Scoring Videos',
	CombineVideos = 'Combine Videos',
	CoachClips = "Coach's Clips",
	GameVideos = 'Game Videos'
}

export enum ThemeCards {
	ThemeCard1 = 'theme-1',
	ThemeCard2 = 'theme-2',
	ThemeCard3 = 'theme-3'
}

export enum ActionModels {
	Rename = 'rename',
	Delete = 'delete',
	ChangeColor = 'changeColor',
	ChangeTheme = 'changeTheme',
	ShareProspectList = 'shareProspectList'
}

export enum ListViewType {
	Table = 'table',
	Card = 'card'
}

export enum ActionTypes {
	Add = 'add',
	Delete = 'Delete',
	Remove = 'Remove',
	View = 'View',
	Actions = 'Actions',
	Edit = 'Edit',
	remove = 'remove',
	ChangePlayerColor = 'Change player color'
}

export enum EvaluationKeys {
	HighSchool = 'highSchool',
	State = 'state',
	YearsStarter = 'yearsStarter',
	Height = 'height',
	Weight = 'weight',
	SecondaryPosition = 'secondaryPosition',
	BirthDate = 'birthDate',
	Country = 'country',
	Age = 'age',
	CollegeProjection = 'collegeProjection',
	CommitmentStatus = 'commitmentStatus',
	EvaluationBy = 'evaluationBy',
	FortyYardTime = 'fortyYardTime',
	SquatMax = 'squatMax',
	SquatMaxRap = 'squatMaxRap',
	HundredYard = 'hundredYard',
	BenchPressMax = 'benchPressMax',
	BenchPressRap = 'benchPressRap',
	Shuttle = 'shuttle',
	Clean = 'clean',
	CleanRap = 'cleanRap',
	ThreeCone = 'threeCone',
	EvaluationRaScore = 'evaluationRaScore',
	EvaluationIgaScore = 'evaluationIgaScore',
	EvaluationProductionScore = 'evaluationProductionScore',
	EvaluationRaRank = 'evaluationRaRank',
	EvaluationIgaRank = 'evaluationIgaRank',
	EvaluationProductionRank = 'evaluationProductionRank',
	Summary = 'summary',
	HighSchoolTranscript = 'highSchoolTranscript',
	BestAttribute = 'bestAttribute',
	WorstAttribute = 'worstAttribute',
	SchemeFit = 'schemeFit',
	VerticalJump = 'verticalJump',
	BroadJump = 'broadJump'
}

export enum QuickNoteKeys {
	QuickNoteTitle = 'quickNoteTitle',
	QuickNoteBody = 'quickNoteBody'
}

export enum DraggableKeys {
	DashboardPlayerSelection = 'Dashboard player selection',
	EdgeAddressBook = 'Edge address book'
}

export enum ThemeModelKeys {
	ShortList = 'shortlistThemeName',
	RecruitingDB = 'recruitingDBThemeName'
}

export enum PlayerSelection {
	comparisonPlayerSelection = 'Comparison player selection'
}

export enum ScreenType {
	TeamForm = 'Team form',
	TeamTableList = 'Team table list',
	UniversityForm = 'University Form',
	UniversityTableList = 'University table List',
	UniversityAddressBook = 'University Address Book',
	PlayerForm = 'Player from',
	PlayerTableList = 'Player table list',
	AddressBookList = 'AddressBookList',
	EditProspectList = 'Edit Prospect List',
	ShareProspectList = 'Share Prospect List'
}

export enum ImageUploadType {
	Team = 'team',
	University = 'university',
	Player = 'player',
	PlayerTranscript = 'player-transcript'
}

export enum Division {
	Power5Elite = 'Power 5 Elite',
	Power5 = 'Power 5',
	GroupOf5 = 'Group of 5',
	Fcs = 'FCS',
	Division2 = 'Division 2',
	Juco = 'JUCO',
	Division3 = 'Division 3',
	NAIA = 'NAIA'
}

export enum CoachRole {
	HeadCoach = 'Head Coach',
	AssistantHeadCoach = 'Assistant Head Coach',
	OffensiveCoordinator = 'Offensive Coordinator',
	DefensiveCoordinator = 'Defensive Coordinator',
	SpecialTeamsCoordinator = 'Special Teams Coordinator',
	QBCoach = 'QB Coach',
	RBCoach = 'RB Coach',
	OLCoach = 'OL Coach',
	DLCoach = 'DL Coach',
	LBCoach = 'LB Coach',
	WRCoach = 'WR Coach',
	StrengthCoach = 'StrengthCoach',
	Physio = 'Physio',
	PlayerPersonnel = 'PlayerPersonnel',
	Other = 'Other'
}

export enum SchoolSize {
	Small = 'Small (0-5,000)',
	Medium = 'Medium (5,001 - 15,000)',
	Large = 'Large (15,001 - 30,000)',
	ExtraLarge = 'Extra Large (30,000+)'
}

export enum SchoolSizeValue {
	Small = '0,5000',
	Medium = '5001,15000',
	Large = '15001,30000',
	ExtraLarge = '30001,100000'
}

export enum Sports {
	AmericanFootball = 'American Football',
	AustralianRulesFootball = 'Australian Rules Football',
	Badminton = 'Badminton',
	Baseball = 'Baseball',
	Basketball = 'Basketball',
	CheerAndSpirit = 'Cheer and Spirit',
	Cricket = 'Cricket',
	CrossCountry = 'Cross Country',
	Cycling = 'Cycling',
	DanceAndDrill = 'Dance and Drill',
	Fencing = 'Fencing',
	FieldHockey = 'Field Hockey',
	Football = 'Football',
	Golf = 'Golf',
	Gymnastics = 'Gymnastics',
	Handball = 'Handball',
	IceHockey = 'Ice Hockey',
	Lacrosse = 'Lacrosse',
	Netball = 'Netball',
	PerformingArts = 'Performing Arts',
	Rugby = 'Rugby',
	RugbyLeague = 'Rugby League',
	RugbyUnion = 'Rugby Union',
	SailingAndYachting = 'Sailing and Yachting',
	Soccer = 'Soccer',
	Softball = 'Softball',
	Squash = 'Squash',
	Surfing = 'Surfing',
	SwimmingAndDiving = 'Swimming and Diving',
	Tennis = 'Tennis',
	TenpinBowling = 'Tenpin Bowling',
	Track = 'Track',
	Volleyball = 'Volleyball',
	WaterPolo = 'Water Polo',
	Wrestling = 'Wrestling',
	Other = 'Other',
	Player = 'player',
	PlayerTranscript = 'player-transcript'
}

export enum HouseClearing {
	yes = 'Yes',
	no = 'No'
}

export enum Relationship {
	Parent = 'Parent',
	Mother = 'Mother',
	Father = 'Father',
	Stepmother = 'Stepmother',
	Stepfather = 'Stepfather',
	Guardian = 'Guardian',
	Other = 'Other'
}

export enum CustomFieldKey {
	PersonalInfoCustomField = 'personalInfoCustomField',
	ProjectionsCustomField = 'projectionsCustomField',
	SocialInfoCustomField = 'socialInfoCustomField',
	GuardianCustomField = 'guardianCustomField',
	AcademicCustomField = 'academicCustomField'
}

export enum AddressBookType {
	University = 'university',
	AllAddressBook = 'allAddressBook'
}
