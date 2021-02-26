<?php

namespace App\Document;

use Doctrine\ODM\MongoDB\Mapping\Annotations as MongoDB;
use Symfony\Component\Serializer\Annotation\Groups;
use App\Document\Log\Activity;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @MongoDB\Document
 */
class Log
{
    /**
     * @MongoDB\Id(strategy="INCREMENT")
     * @Groups({"log_create", "log_list"})
     *
     * @var int
     */
    private $id;

    /**
     * @MongoDB\EmbedOne(targetDocument=Activity::class)
     * @Groups({"log_create", "log_list"})
     * @Assert\NotBlank()
     * @Assert\Valid()
     *
     * @var Activity
     */
    private $activity;

    /**
     * @MongoDB\Field(type="int")
     * @Groups({"log_create", "log_list"})
     * @Assert\NotBlank()
     * @Assert\GreaterThan(0)
     * @Assert\LessThan(1440)
     *
     * @var int
     */
    private $duration;

    /**
     * @MongoDB\Field(type="date")
     * @Groups({"log_create", "log_list"})
     * @Assert\NotBlank()
     *
     * @var \DateTimeInterface
     */
    private $date;

    public function getId(): int
    {
        return $this->id;
    }

    public function setId(int $id): self
    {
        $this->id = $id;

        return $this;
    }

    public function getActivity(): Activity
    {
        return $this->activity;
    }

    public function setActivity(Activity $activity): self
    {
        $this->activity = $activity;

        return $this;
    }

    public function getDuration(): int
    {
        return $this->duration;
    }

    public function setDuration(int $duration): self
    {
        $this->duration = $duration;

        return $this;
    }

    public function getDate(): \DateTimeInterface
    {
        return $this->date;
    }

    public function setDate(\DateTimeInterface $date): self
    {
        $this->date = $date;

        return $this;
    }
}
