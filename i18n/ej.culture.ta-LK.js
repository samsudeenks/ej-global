ej.addCulture( "ta-LK", {
	name: "ta-LK",
	englishName: "Tamil (Sri Lanka)",
	nativeName: "தமிழ் (இலங்கை)",
	language: "ta",
	numberFormat: {
		groupSizes: [3,2],
		negativeInfinity: "(-) முடிவிலி",
		positiveInfinity: "(+) முடிவிலி",
		percent: {
			pattern: ["-n%","n%"],
			groupSizes: [3,2]
		},
		currency: {
			pattern: ["$ -n","$ n"],
			groupSizes: [3,2],
			symbol: "Rs"
		}
	},
	calendars: {
		standard: {
			"/": "-",
			firstDay: 1,
			days: {
				names: ["ஞாயிற்றுக்கிழமை","திங்கட்கிழமை","செவ்வாய்க்கிழமை","புதன்கிழமை","வியாழக்கிழமை","வெள்ளிக்கிழமை","சனிக்கிழமை"],
				namesAbbr: ["ஞாயிறு","திங்கள்","செவ்வாய்","புதன்","வியாழன்","வெள்ளி","சனி"],
				namesShort: ["ஞா","தி","செ","பு","வி","வெ","ச"]
			},
			months: {
				names: ["ஜனவரி","பெப்ரவரி","மார்ச்","ஏப்ரல்","மே","ஜூன்","ஜூலை","ஓகஸ்ட்","செப்ரம்பர்","ஒக்ரோபர்","நவம்பர்","டிசம்பர்",""],
				namesAbbr: ["ஜன.","பெப்.","மார்.","ஏப்","மே","ஜூன்","ஜூலை","ஓக.","செப்.","ஒக்.","நவ.","டிச.",""]
			},
			AM: ["காலை","காலை","காலை"],
			PM: ["மாலை","மாலை","மாலை"],
			patterns: {
				d: "dd-MM-yyyy",
				D: "dd MMMM yyyy",
				t: "HH:mm",
				T: "HH:mm:ss",
				f: "dd MMMM yyyy HH:mm",
				F: "dd MMMM yyyy HH:mm:ss",
				M: "d MMMM"
			}
		}
	}
});
