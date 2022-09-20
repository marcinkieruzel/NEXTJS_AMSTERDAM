export interface Property {
    id:               number;
    title:            string;
    link:             string;
    thumb:            boolean | string;
    fields:           Fields;
    excerpt:          string;
    latlong:          Latlong;
    transaction_type: Location[];
    new:              boolean;
    property_type:    Location[];
    offer_type:       Location[];
    location:         Location[];
    features:         Feature[];
}

export interface Feature {
    name: FeatureName;
    slug: FeatureSlug;
}

export enum FeatureName {
    ACInLounge = "A/C IN LOUNGE",
    AirConditioning = "AIR CONDITIONING",
    BackupGenerator = "BACKUP GENERATOR",
    Balcony = "BALCONY",
    Beachfront = "BEACHFRONT",
    CableTv = "CABLE TV",
    CarParking = "CAR PARKING",
    CleaningIncluded = "CLEANING INCLUDED",
    Elevator = "ELEVATOR",
    Furnished = "FURNISHED",
    Garage = "GARAGE",
    Garden = "GARDEN",
    Gym = "GYM",
    InlandCustomsClearancePortICD = "Inland Customs Clearance Port (ICD)",
    Laundry = "LAUNDRY",
    MainStreet = "MAIN STREET",
    MotorbikeParking = "MOTORBIKE PARKING",
    MountainView = "MOUNTAIN VIEW",
    NationalGridSystem = "National Grid System",
    OceanView = "OCEAN VIEW",
    OffStreetParking = "OFF STREET PARKING",
    OutdoorArea = "OUTDOOR AREA",
    PetFriendly = "PET FRIENDLY",
    Playground = "PLAYGROUND",
    PrivatePool = "PRIVATE POOL",
    ReceptionDesk = "RECEPTION DESK",
    RiverView = "River View",
    RooftopTerrace = "ROOFTOP TERRACE",
    Security = "SECURITY",
    SwimmingPool = "SWIMMING POOL",
    TennisCourt = "TENNIS COURT",
    The247Access = "24/7 ACCESS",
    UtilitiesIncluded = "UTILITIES INCLUDED",
    ViewSông = "View Sông",
    WalkToBeach = "WALK TO BEACH",
    WalkToRiver = "Walk to River",
    WasteTreatmentSystem = "Waste Treatment System",
    WastewaterTreatmentSystem = "Wastewater Treatment System",
    WholeBuilding = "WHOLE BUILDING",
    Wifi = "WIFI",
}

export enum FeatureSlug {
    ACInTheLounge = "a-c-in-the-lounge",
    AirCondition = "air-condition",
    BackupGenerator = "backup-generator",
    Balcony = "balcony",
    Beachfront = "beachfront",
    CableTv = "cable-tv",
    CarParking = "car-parking",
    CleaningIncluded = "cleaning-included",
    Elevator = "elevator",
    Furnished = "furnished",
    Garage = "garage",
    Garden = "garden",
    Gym = "gym",
    InlandCustomsClearancePortIcd = "inland-customs-clearance-port-icd",
    Laundry = "laundry",
    MainStreet = "main-street",
    MotorbikeParking = "motorbike-parking",
    MountainsView = "mountains-view",
    NationalGridSystem = "national-grid-system",
    OceanView = "ocean-view",
    OffStreetParking = "off-street-parking",
    OutdoorArea = "outdoor-area",
    PetFriendly = "pet-friendly",
    Playground = "playground",
    PrivateSwimmingPool = "private-swimming-pool",
    ReceptionDesk = "reception-desk",
    RiverView = "river-view",
    RooftopTerrace = "rooftop-terrace",
    Security = "security",
    SwimmingPool = "swimming-pool",
    TennisCourt = "tennis-court",
    The247Access = "24-7-access",
    UtilitiesInPriceWifiCableElectricityWater = "utilities-in-price-wifi-cable-electricity-water",
    ViewSong2 = "view-song-2",
    WalkToBeach = "walk-to-beach",
    WalkToRiver = "walk-to-river",
    WasteTreatmentSystem = "waste-treatment-system",
    WastewaterTreatmentSystem = "wastewater-treatment-system",
    WholeBuilding = "whole-building",
    Wifi = "wifi",
}

export interface Fields {
    price:             number;
    rent_price:        number;
    price_description: PriceDescription;
    location:          null;
    bedrooms:          string;
    refno:             string;
    baths:             string;
    space:             number;
    land:              number;
    gallery:           string[];
    agents:            Agent[];
}

export interface Agent {
    ID:               number;
    user_firstname:   UserFirstname;
    user_lastname:    UserLastname;
    nickname:         Nickname;
    user_nicename:    UserNicename;
    display_name:     DisplayName;
    user_email:       UserEmail;
    user_url:         string;
    user_registered:  Date;
    user_description: string;
    user_avatar:      string;
}

export enum DisplayName {
    AustinWeyers = "Austin Weyers",
    DungNguyen = "Dung Nguyen",
    HieuNguyen = "Hieu Nguyen",
    HuongVo = "Huong Vo",
    HuyHoang = "Huy Hoang",
    PeterFrieske = "Peter Frieske",
    TrangKieu = "Trang Kieu",
    TrangLE = "Trang Le",
    VietQuach = "Viet Quach",
}

export enum Nickname {
    MSDungNguyen = "Ms. Dung Nguyen",
    MSHuongVo = "Ms. Huong Vo",
    MSHuyHoang = "Ms. Huy Hoang",
    MSTrangKieu = "Ms. Trang Kieu",
    MSTrangLE = "Ms. Trang Le",
    MrAustinWeyers = "Mr. Austin Weyers",
    MrHieuNguyen = "Mr. Hieu Nguyen",
    MrPeterFrieske = "Mr. Peter Frieske",
    MrVietQuach = "Mr. Viet Quach",
}

export enum UserEmail {
    AustinWeyersCvrCOMVn = "austin.weyers@cvr.com.vn",
    DungNguyenCvrCOMVn = "dung.nguyen@cvr.com.vn",
    HieuNguyenCvrCOMVn = "hieu.nguyen@cvr.com.vn",
    HoangLECvrCOMVn = "hoang.le@cvr.com.vn",
    HuongVoCvrCOMVn = "huong.vo@cvr.com.vn",
    PeterFrieskeCvrCOMVn = "peter.frieske@cvr.com.vn",
    TrangKieuCvrCOMVn = "trang.kieu@cvr.com.vn",
    TrangLECvrCOMVn = "trang.le@cvr.com.vn",
    VietQuachCvrCOMVn = "viet.quach@cvr.com.vn",
}

export enum UserFirstname {
    Austin = "Austin",
    Dung = "Dung",
    Hieu = "Hieu",
    Huong = "Huong",
    Huy = "Huy",
    Peter = "Peter",
    Trang = "Trang",
    Viet = "Viet",
}

export enum UserLastname {
    Frieske = "Frieske",
    Hoang = "Hoang",
    Kieu = "Kieu",
    LE = "Le",
    Nguyen = "Nguyen",
    Quach = "Quach",
    Vo = "Vo",
    Weyers = "Weyers",
}

export enum UserNicename {
    MSDungNguyen = "ms-dung-nguyen",
    MSHoangLE = "ms-hoang-le",
    MSHuongVo = "ms-huong-vo",
    MSTrangKieu = "ms-trang-kieu",
    MSTrangLE = "ms-trang-le",
    MrAustinWeyers = "mr-austin-weyers",
    MrHieuNguyen = "mr-hieu-nguyen",
    MrPeterFrieske = "mr-peter-frieske",
    MrVietQuach = "mr-viet-quach",
}

export enum PriceDescription {
    AwaitingPrices = "Awaiting Prices",
    CallForPrice = "CALL FOR PRICE",
    Empty = "",
    FromUS659K = "From US$659k",
    FromUS670K = "From US$670k",
    FromUSD415000 = "From USD415,000",
    OnHold = "ON HOLD",
    Pending = "PENDING",
    PriceDescriptionONHOLD = "ON-HOLD",
    PriceUponRequest = "Price Upon Request",
    Rented = "RENTED",
    Sold = "SOLD",
    The6500 = "$6,500",
}

export interface Latlong {
    address:            string;
    lat:                number;
    lng:                number;
    zoom:               number;
    place_id:           string;
    name?:              string;
    street_number?:     string;
    street_name?:       string;
    state:              State;
    post_code?:         string;
    country:            Country;
    country_short:      CountryShort;
    street_name_short?: string;
    city?:              string;
    city_short?:        string;
}

export enum Country {
    Vietnam = "Vietnam",
}

export enum CountryShort {
    Vn = "VN",
}

export enum State {
    BìnhĐịnh = "Bình Định",
    DaNang = "Da Nang",
    NgũHànhSơn = "Ngũ Hành Sơn",
    QuangBinhProvince = "Quang Binh Province",
    QuangNamProvince = "Quang Nam Province",
    QuảngNam = "Quảng Nam",
    ThuaThienHue = "Thua Thien Hue",
    ThừaThiênHuế = "Thừa Thiên Huế",
    ĐàNẵng = "Đà Nẵng",
}

export interface Location {
    term_id:          number;
    name:             LocationName;
    slug:             LocationSlug;
    term_group:       number;
    term_taxonomy_id: number;
    taxonomy:         Taxonomy;
    description:      string;
    parent:           number;
    count:            number;
    filter:           Filter;
    term_order:       string;
}

export enum Filter {
    Raw = "raw",
}

export enum LocationName {
    APARTMENTSAmpCONDOS = "APARTMENTS &amp; CONDOS",
    ApartmentBuildings = "APARTMENT BUILDINGS",
    Buy = "Buy",
    CamKim = "Cam Kim",
    CamLE = "Cam Le",
    Commercial = "Commercial",
    CẩmAnAnBangBeach = "Cẩm An (An Bang Beach)",
    DaNang = "Da Nang",
    DevelopmentLand = "DEVELOPMENT LAND",
    DienBan = "Dien Ban",
    DienDuong = "Dien Duong",
    DuyXuyen = "Duy Xuyen",
    HOTELSAmpRESORTS = "HOTELS &amp; RESORTS",
    HOUSESAmpVILLAS = "HOUSES &amp; VILLAS",
    HaiChau = "Hai Chau",
    HoiAn = "Hoi An",
    Hue = "Hue",
    Industrial = "INDUSTRIAL",
    Land = "LAND",
    LienChieu = "Lien Chieu",
    MinhAn = "Minh An",
    NguHanhSon = "Ngu Hanh Son",
    OTHERCOMMERCIALAmpSPECIALPURPOSE = "OTHER COMMERCIAL &amp; SPECIAL PURPOSE",
    Offices = "OFFICES",
    PhongNha = "Phong Nha",
    QuangNam = "Quang Nam",
    QuyNhơn = "Quy Nhơn",
    Rent = "Rent",
    Residential = "Residential",
    Retail = "RETAIL",
    SonTra = "Son Tra",
}

export enum LocationSlug {
    ApartamentBuildings = "apartament-buildings",
    ApartmentsCondos = "apartments-condos",
    Buy = "buy",
    CamAnBangBeach = "cam-an-bang-beach",
    CamKim = "cam-kim",
    CamLE = "cam-le",
    CommercialsAndDevelopmentLand = "commercials-and-development-land",
    DaNang = "da-nang",
    DienBan = "dien-ban",
    DienDuong = "dien-duong",
    DuyXuyen = "duy-xuyen",
    HaiChau = "hai-chau",
    HoiAn = "hoi-an",
    HotelsResorts = "hotels-resorts",
    HousesVillas = "houses-villas",
    Hue = "hue",
    Industrial = "industrial",
    Land = "land",
    Lands = "lands",
    LienChieu = "lien-chieu",
    MinhAn = "minh-an",
    NguHanhSon = "ngu-hanh-son",
    Offices = "offices",
    OtherCommercials = "other-commercials",
    PhongNha = "phong-nha",
    QuangNam = "quang-nam",
    QuyNhon = "quy-nhon",
    Rent = "rent",
    ResidentialAndDevelopments = "residential-and-developments",
    Retail = "retail",
    SonTra = "son-tra",
}

export enum Taxonomy {
    Location = "location",
    OfferType = "offer_type",
    PropertyType = "property_type",
    TransactionType = "transaction_type",
}