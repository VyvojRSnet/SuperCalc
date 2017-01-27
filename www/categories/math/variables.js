/**********************************************************************
 ** Module:      Category - Math
 ** Author/Date: Slavoj SANTA Hruska / 20170125
 ** Objective:   Registering all known variables used in Math class and
 **              all its subcategories
 **********************************************************************
 ** Author/Date: Authors name, YYYYMMDD
 ** Changes:     Description of change (package interface changes only)
 **********************************************************************/

app.logInfo('Registration of variables: Start');


app.variables.register(
    new TVariable(
	'ω',
	'Uhlová rýchlosť',
	'Uhlová rýchlosť je fyzikálna veličina opisujúca otáčavý pohyb telesa. Jednotkou uhlovej rýchlosti je radián za sekundu (radián je pritom bezrozmerná jednotka, uhlová rýchlosť má teda vlastne rovnaký rozmer ako napríklad frekvencia).',
	TCatMath,
	'rad*s^-1'
    )
);

app.variables.register(
    new TVariable(
	'ϕ',
	'Uhol',
	'Uhol',
	TCatMath,
	'rad'
    )
);


app.variables.register(
    new TVariable(
	'Spl',
	'Obsah plášťa',
	'Obsah plášťa',
	TCatMath,
	'm^2'
    )
);

app.variables.register(
    new TVariable(
	'Sp',
	'Obsah podstavy',
	'Obsah podstavy',
	TCatMath,
	'm^2'
    )
);

app.variables.register(
    new TVariable(
	'V',
	'Objem telesa',
	'Objem telesa',
	TCatMath,
	'm^2'
    )
);

app.variables.register(
    new TVariable(
	'v',
	'Výška',
	'Výška',
	TCatMath,
	'm'
    )
);

app.variables.register(
    new TVariable(
	'r',
	'Polomer',
	'Polomer',
	TCatMath,
	'm'
    )
);

app.variables.register(
    new TVariable(
	'o',
	'Obvod',
	'Obvod',
	TCatMath,
	'm'
    )
);

app.variables.register(
    new TVariable(
	'a',
	'Dĺžka strany a',
	'Dĺžka strany a',
	TCatMath,
	'm'
    )
);

app.variables.register(
    new TVariable(
	'b',
	'Dĺžka strany b',
	'Dĺžka strany b',
	TCatMath,
	'm'
    )
);
app.variables.register(
    new TVariable(
	'c',
	'Dĺžka strany c',
	'Dĺžka strany c',
	TCatMath,
	'm'
    )
);
app.variables.register(
    new TVariable(
	'd',
	'Dĺžka strany d',
	'Dĺžka strany d',
	TCatMath,
	'm'
    )
);

app.variables.register(
    new TVariable(
	't',
	'Čas',
	'Čas za ktorý sa daný proces udeje',
	TCatMath,
	's'
    )
);

app.logInfo('Registration of variables: Done');
