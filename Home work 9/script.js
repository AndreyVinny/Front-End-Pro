hero = ['Ivan'];
native = ['York','Of'];
destination = ['Poltava','In'];

rainbow = destination.concat(native, hero);
rainbow.reverse();
rainbow.splice(0,1, `Richard`);
rainbow.splice(3,0, `Gave`,`Battle`)
rainbow.splice(length-1,1, `Vain`);

document.write(`<table>
                    </tr>
                        <td> 
                            ${rainbow.join(`<rd> </rd>`)}
                        </td>
                    </tr>
                </table>`
);

document.write(`<p>Вариант 2</p>`);
color = [`red`,`orange`, `yellow`,`green`,`skyblue`,`blue`,`purple`];
document.write(`<table>
                    </tr>
                        <td> 
                        <span class="round" style="background: ${color[0]};"></span>
                        </td>
                        <td> 
                        <span class="round" style="background: ${color[1]};"></span>
                        </td>
                        <td> 
                        <span class="round" style="background: ${color[2]};"></span>
                        </td>
                        <td> 
                        <span class="round" style="background: ${color[3]};"></span>
                        </td>
                        <td> 
                        <span class="round" style="background: ${color[4]};"></span>
                        </td>
                        <td> 
                        <span class="round" style="background: ${color[5]};"></span>
                        </td>
                        <td> 
                        <span class="round" style="background: ${color[6]};"></span>
                        </td>
                    </tr>
                    </tr>
                        <td> 
                            ${rainbow[0]}
                        </td>
                        <td> 
                            ${rainbow[1]}
                        </td>
                        <td> 
                            ${rainbow[2]}
                        </td>
                        <td> 
                            ${rainbow[3]}
                        </td>
                        <td> 
                            ${rainbow[4]}
                        </td>
                        <td> 
                            ${rainbow[5]}
                        </td>
                        <td> 
                            ${rainbow[6]}
                        </td>
                    </tr>
                </table>`
);