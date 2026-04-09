$(document).ready(function() {
									
									var b = 0;
									
									$('#heading h1').fadeOut(3000, function(){	//4000
										$('#heading h1').text("I'm Mango");
										$('#heading h1').fadeIn(1500, function(){						
											$('#heading h1').fadeOut(1500, function(){	//2000
												$('#heading h1').text("I can read your mind");
												$('#heading h1').fadeIn(1500, function(){
													$('#heading h1').fadeOut(1500, function(){
														$('#heading h1').text("Think of a number from 1 to 99");
														$('#heading h1').fadeIn(1500, function(){
															$('#heading h1').fadeOut(3000, function(){	// 3000
																$('#heading h1').text("Click to answer 7 of my questions");
																$('#heading h1').fadeIn(1500, function(){
																	$('#heading h5').css('display','none');
																	$('#titleBut').fadeIn(2000);
																	});
																});
															});
														});
													});											
												});
											});
										});
									
									$("#top").mousemove(function(event) {							// Eye Movement Mathematics
				var eye = $(".eye");
				var x = (eye.offset().left) + (eye.width() / 2);
				var y = (eye.offset().top) + (eye.height() / 2);
				var rad = Math.atan2(event.pageX - x, event.pageY - y);
				var rot = (rad * (180 / Math.PI) * -1) + 180;
				eye.css({
				  '-webkit-transform': 'rotate(' + rot + 'deg)',
				  '-moz-transform': 'rotate(' + rot + 'deg)',
				  '-ms-transform': 'rotate(' + rot + 'deg)',
				  'transform': 'rotate(' + rot + 'deg)'
					});
			      });
								
									$('#titleBut').on('click',function(){
									console.log("Clicked");
									$('#heading h1').fadeOut(1000);
									$('#titleBut').fadeOut(1000, function(){
											$('#midBox').fadeIn();
												$('#numberBox').fadeIn(2000);
													$('.containerE').fadeIn(1000);
										// Call first set numbers
										var q1_len = q1.length;
										for(var i=0; i<q1_len; i++)
										{
											$('#Numbers').append('<div class = "IntNumbers">'+q1[i]+'</div>');
										}
														
														$('#YesBox p').fadeIn().addClass('animated fadeInLeft');
															$('#NoBox p').fadeIn().addClass('animated fadeInRight');
															$('#YesBox').on('click', function(){		// Clicking on yes
																console.log("Clicked for set 1");
																$('#YesBox p').css('display','none');
																$('#NoBox p').css('display','none');
																$('#YesBox').remove();
																$('#NoBox').remove();
																$('#midBox').prepend('<div id="YesBoxSet2"><p style="display: none">Yes</p></div>');
																//$('#YesBox').attr("id","YesBoxSet2");
															 //$('#NoBox').attr("id","NoBoxSet2");
																$('#midBox').append('<div id="NoBoxSet2"><p style="display: none">No</p></div>');
																
																b = b+2;
																q2_func(2);	// Calling second set of numbers
																});
															$('#NoBox').on('click', function(){
																console.log("Clicked for set 1");
																$('#YesBox p').css('display','none');
																$('#NoBox p').css('display','none');
																$('#YesBox').remove();
																$('#NoBox').remove();
																//$('#YesBox').attr("id","YesBoxSet2");
																//$('#NoBox').attr("id","NoBoxSet2");
																$('#midBox').prepend('<div id="YesBoxSet2"><p style="display: none">Yes</p></div>');
																$('#midBox').append('<div id="NoBoxSet2"><p style="display: none">No</p></div>');
																q2_func(2);
																});
										});
									
									
									});
									
									function q2_func(which_set)
									{
											if (which_set == 8){
												display_answer();
												return;
											}
																			
											//which_set = 2;
											console.log("B value "+b);
											console.log("Set "+which_set);
											$('#Numbers').fadeOut(1000, function(){
												
												$('.IntNumbers').remove();
											// call in new second set of numbers
											data_set_arr = ["q0", "q1", q2, q3, q4, q5, q6, q7];
											var q2_len = data_set_arr[which_set].length;
											//console.log(q2_len);
											//console.log(b);
											for (var j=0; j<q2_len; j++)
											{
											
												$('#Numbers').append('<div class = "IntNumbers">'+data_set_arr[which_set][j]+'</div>');
											}
											$('#Numbers').fadeIn(2000, function(){
												$('#YesBoxSet'+which_set+' p').fadeIn().addClass('animated fadeInLeft');
															$('#NoBoxSet'+which_set+' p').fadeIn().addClass('animated fadeInRight');
															
															
																$('#YesBoxSet'+which_set+'').on('click', function(){	// Click on Yes
																	console.log("Clicked for set" +which_set);
																$('#YesBoxSet'+which_set+' p').css('display','none');
																$('#NoBoxSet'+which_set+' p').css('display','none');
																
																$('#YesBoxSet'+which_set+'').remove();
																$('#NoBoxSet'+which_set+'').remove();
														
																console.log("In here");
																
																switch(which_set)
																{
																	case 2: b = b+4;
																		break;
																	case 3: b = b+1;
																		break;
																	case 4: b = b+16;
																		break;
																	case 5: b = b+8;
																		break;
																	case 6: b = b+32;
																		break;
																	case 7: b = b+64;
																		break;																
																}
																
															
																$('#midBox').prepend('<div id="YesBoxSet'+(which_set+1)+'"><p style="display: none">Yes</p></div>');
																$('#midBox').append('<div id="NoBoxSet'+(which_set+1)+'"><p style="display: none">No</p></div>');
																which_set = which_set + 1;
																q2_func(which_set);
																	});
																$('#NoBoxSet'+which_set+'').on('click', function(){	// Click on No
																console.log("Clicked for set "+which_set);
																$('#YesBoxSet'+which_set+' p').css('display','none');
																$('#NoBoxSet'+which_set+' p').css('display','none');
																
																$('#YesBoxSet'+which_set+'').remove();
																$('#NoBoxSet'+which_set+'').remove();
																
															
																$('#midBox').prepend('<div id="YesBoxSet'+(which_set+1)+'"><p style="display: none">Yes</p></div>');
																$('#midBox').append('<div id="NoBoxSet'+(which_set+1)+'"><p style="display: none">No</p></div>');
																which_set = which_set + 1;
																q2_func(which_set);
																});
																
												});
												
												});
											
									}
									
									function display_answer()
									{
										console.log("ANser is "+b);
										$('#Numbers').fadeOut(1000, function(){												
												$('.IntNumbers').remove();
												$('#numberBox').css('height','397.34');
												$('#numberQuestion p').fadeOut(800, function(){
													
													$('#numberQuestion p').remove();													
													$('#Numbers').css('display','inline');
													$('#numberQuestion').addClass('typewriter').append('<h1>The number in your mind</h1>');
													
														
															$('#Numbers').delay(1000, function(){
																$('#Numbers').append('<h2 id="Output" class = "animated zoomIn">'+b+'</h2>');
																});
															$('#AnyThoughts').delay(5000).fadeIn(500);
															$('#AnyThoughts').on('click', function(){
																$('#contact').fadeIn(500);
																$('html, body').animate({
												    scrollTop: $("#contact").offset().top
																}, 1000);
																});
															
													});
										});										
									}
									
									});