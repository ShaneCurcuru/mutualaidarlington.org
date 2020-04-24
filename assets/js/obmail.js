// Copyright (c) 2020 Shane Curcuru
// Licensed under the Apache License, Version 2.0
function obMail(a, b) {
    window.location.href = "mail" + 
        "to:" + 
        window.atob(a) +
        "?subject=" + 
        escape("Mask Request from Mutual Aid Arlington") +
        "&body=" + 
        escape(b)
    ;
}
function obf(b) {
    return window.btoa(b);
}
