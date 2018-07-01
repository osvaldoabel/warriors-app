<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateWarriorsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('warriors', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->integer('life');
            $table->integer('damnification');
            $table->string('defense');
            $table->float('attack_velocity');
            $table->float('movement_velocity');
            $table->integer('speciality_id');
            $table->foreign('speciality_id')->references('id')->on('specialities');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('warriors');
    }
}
