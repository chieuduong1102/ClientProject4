<template>
    <div class="service_info_area home2_service_info">
			<div class="container">
				<div class="row">
					<div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
						<div class="service_list from-left">
							<h3><i class="fa fa-location-arrow"></i> Ha Noi, Ha Noi, Viet Nam</h3>
						</div>
					</div>
					<div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
						<div class="service_list ">
							<h3><i class="fa fa-phone"></i> (+0123) 456 789</h3>
						</div>
					</div>
					<div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
						<div class="service_list ">
							<h3>Connect us: </h3>
							<div class="social_icon my-class uk-scrollspy-init-inview uk-invisible">
								<a data-toggle="tooltip" data-placement="top" title="" data-original-title="Like 6k" class="red-tooltip" href="#"></a>
								<a data-toggle="tooltip" data-placement="top" title="" data-original-title="Followers 61k" class="red-tooltip" href="#"><i class="fa fa-youtube"></i></a>
								<a data-toggle="tooltip" data-placement="top" title="" data-original-title="Followers 16k" class="red-tooltip" href="#"><i class="fa fa-instagram"></i></a>
								<a data-toggle="tooltip" data-placement="top" title="" data-original-title="Followers 10k" class="red-tooltip" href="#"><i class="fa fa-envelope-o"></i></a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
</template>

<script>
export default {
    setup () {
        

        return {}
    }
}
</script>

<style scoped >
.service_list{
	cursor: pointer;
	border-top: 2px solid white;
	border-bottom: 2px solid white;
	border-left: none;
	border-right: none;
}

.service_list h2{
	color: white;
}

.service_list h3{
	color: white;
}

.fa-facebook:hover{
	font-size: 1.3em;
	color: #101dd1;
}
.fa-youtube:hover{
	font-size: 1.3em;
	color: #e30909;
}
.fa-instagram:hover{
	font-size: 1.3em;
	color: #bc36fa;
}
.fa-envelope-o:hover{
	font-size: 1.3em;
	color: #ff7474;
}
</style>