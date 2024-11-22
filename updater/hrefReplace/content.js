function modifyHref() {
    const links = document.getElementsByTagName('a');
    for (const link of links) {
        const href = link.getAttribute('href');
        if (href === null || href === undefined) continue; // href가 없는 경우 건너뛰기

        if (href.startsWith('/product')) {
            link.href = `https://www.eqlstore.com${href}?isBoPreview=Y`;
            link.setAttribute('target', '_blank');
        } else if (href.startsWith('/article/') || href.startsWith('/public/') || href.startsWith('/special/') || href.startsWith('/display/') || href.startsWith('/event/')) {
            link.href = `https://www.eqlstore.com${href}?prev=Y`;
            link.setAttribute('target', '_blank');
        } else if (href.startsWith('/brands/')) {
            link.href = `https://www.eqlstore.com${href}`;
            link.setAttribute('target', '_blank');
        }
        
        if (href.startsWith("javascript:fn_productDetailOpen('/")) {
            link.href = href.replace(
                "javascript:fn_productDetailOpen('/",
                "javascript:fn_productDetailOpen('https://www.eqlstore.com/"
            );
            link.setAttribute('target', '_blank');
        }
    }
}
modifyHref();