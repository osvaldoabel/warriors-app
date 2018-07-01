<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateThumbnailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('thumbnails', function (Blueprint $table) {
            $table->increments('id');
            $table->string('filename');
            $table->bool('default');
            $table->string('description');
            $table->integer('warrior_id');
            $table->foreign('warrior_id')->references('id')->on('warriors');
            $table->integer('status');
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
        Schema::dropIfExists('thumbnails');
    }
}
