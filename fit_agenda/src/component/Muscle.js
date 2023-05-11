import anatomy from '../muscle-gb251b02a2_1280.svg';
import '../style/muscle.scss';

function Muscle() {
	return (
		<div>
			{/* <map name="muscle">
				<area
					target=""
					alt=""
					title="pectoral"
					href=""
					coords="380,217,368,215,356,212,341,212,327,214,307,224,298,242,302,261,310,275,323,283,340,285,361,281,378,273,395,281,409,284,427,284,446,276,456,269,460,254,459,241,452,227,440,218,431,214,410,210,392,213"
					shape="poly"
				></area>
				<area
					target=""
					alt=""
					title="abs"
					href=""
					coords="340,285,334,302,334,337,337,373,378,361,427,371,425,343,426,311,421,283,393,274,380,272,356,280,347,282,347,284"
					shape="poly"
				></area>
				<area
					target=""
					alt=""
					title="lefFrontDelt"
					href=""
					coords="424,208,441,202,455,197,478,202,496,223,503,239,507,258,508,275,488,261,475,254,465,252,459,235,450,221,435,213"
					shape="poly"
				></area>
				<area
					target=""
					alt=""
					title="rightFrontDelt"
					href=""
					coords="339,206,326,204,315,199,308,193,283,199,268,208,261,223,254,243,250,256,249,267,250,276,270,262,286,257,297,249,301,231,314,218"
					shape="poly"
				></area>
				<area
					target=""
					alt=""
					title="trapezoid"
					href=""
					coords="875,181,850,192,827,204,836,235,848,261,865,276,887,290,898,305,920,288,941,278,950,260,960,240,966,223,974,207,961,201,936,188,925,179"
					shape="poly"
				></area>
				<area
					target=""
					alt=""
					title="rightBiceps"
					href=""
					coords="251,276,241,292,235,304,237,317,257,328,274,308,279,296,285,283,287,267,286,253,265,262"
					shape="poly"
				></area>
				<area
					target=""
					alt=""
					title="leftBiceps"
					href=""
					coords="470,254,473,268,473,282,476,293,486,309,499,320,508,322,521,318,527,304,516,286,505,276,485,260"
					shape="poly"
				></area>
				<area
					target=""
					alt=""
					title="rightBackDelt"
					href=""
					coords="952,260,966,274,979,283,1001,288,1015,287,1024,278,1029,269,1028,252,1021,235,1005,219,986,207,975,204,962,232"
					shape="poly"
				></area>
				<area
					target=""
					alt=""
					title="leftBackDelt"
					href=""
					coords="826,204,811,205,798,212,784,224,772,241,771,267,769,285,795,290,813,287,829,279,840,269,845,257,833,234"
					shape="poly"
				></area>
				<area
					target=""
					alt=""
					title="back"
					href=""
					coords="810,298,820,325,832,348,840,363,863,377,876,393,891,409,897,421,902,411,910,403,922,391,928,382,946,369,958,368,966,358,972,349,979,334,983,313,991,290,972,283,959,271,952,263,937,277,926,283,910,291,894,301,889,294,879,285,864,277,845,261,826,281,818,289,811,294"
					shape="poly"
				></area>
				<area
					target=""
					alt=""
					title="frontLegs"
					href=""
					coords="388,474,404,448,409,429,417,406,436,395,449,389,457,404,469,448,476,483,476,537,456,587,451,635,442,701,438,737,434,784,409,791,395,694,384,668,400,632,396,527,383,472,371,476,366,512,364,551,363,584,357,633,372,668,364,717,352,770,351,799,320,792,321,752,301,691,308,631,309,597,293,570,286,542,282,502,287,460,286,435,303,403,309,387,327,392,340,402,355,446,360,464"
					shape="poly"
				></area>
				<area
					target=""
					alt=""
					title="backLegs"
					href=""
					coords="829,393,851,388,868,387,883,394,895,420,899,428,911,416,922,403,943,389,960,387,973,390,979,407,983,429,987,461,997,491,998,515,991,554,985,573,977,596,976,619,970,638,946,634,931,643,922,638,917,601,918,549,914,526,906,483,893,478,891,491,885,517,883,534,885,546,883,570,883,594,880,616,880,631,879,638,843,636,834,635,818,598,814,572,806,541,805,518,805,492,809,459,816,442,821,411,824,404,825,396"
					shape="poly"
				></area>
				<area
					target=""
					alt=""
					title="calves"
					href=""
					coords="879,644,849,636,834,644,831,680,831,705,833,717,838,741,841,763,844,783,844,801,842,817,873,812,870,799,874,780,879,749,882,728,888,705,888,693,889,671,876,644,922,642,915,653,909,683,917,704,918,724,919,739,923,762,929,785,922,805,925,816,948,805,957,799,952,766,963,736,967,708,967,685,969,673,970,658,969,647,967,636,940,638"
					shape="poly"
				></area>
				<area
					target=""
					alt=""
					title="obliques"
					href=""
					coords="377,270,331,308,335,333,330,354,333,372,336,392,318,387,305,379,306,357,309,332,305,315,298,295,286,270,289,253,334,284,375,275,385,271,405,275,416,281,426,281,448,275,458,267,463,258,465,248,470,267,468,284,461,301,458,318,453,327,448,337,448,357,448,372,449,384,434,387,419,394,423,369,426,358,426,346,425,333,424,324,422,308,421,299,420,289,392,276,439,316,377,270"
					shape="poly"
				></area>
				<area
					target=""
					alt=""
					title="leftTriceps"
					href=""
					coords="811,287,770,263,756,278,751,304,761,316,772,322,779,325,783,329,793,316"
					shape="poly"
				></area>
				<area
					target=""
					alt=""
					title="rightTriceps"
					href=""
					coords="996,293,1004,291,1012,282,1033,264,1055,307,1024,331,1018,329,1009,321"
					shape="poly"
				></area>
			</map> */}
			<img
				usemap="#muscle"
				alt="anatomie musculaire homme"
				src={anatomy}
			></img>
		</div>
	);
}

export default Muscle;